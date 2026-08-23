#!/usr/bin/env node
/**
 * Оптимизация тяжёлых изображений in-place.
 * Запуск: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const MIN_BYTES = 1024 * 1024;

const JPEG_OPTIONS = {
  quality: 82,
  mozjpeg: true,
  progressive: true,
};

const HERO_MAX_WIDTH = 1920;
const PROJECT_JPEG_MAX_WIDTH = 1600;
const PNG_OPTIONS = {
  compressionLevel: 9,
  adaptiveFiltering: true,
  palette: true,
  quality: 80,
};

async function collectLargeFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectLargeFiles(fullPath)));
      continue;
    }

    if (!/\.(jpe?g|png)$/i.test(entry.name)) {
      continue;
    }

    const stat = await fs.stat(fullPath);

    if (stat.size >= MIN_BYTES) {
      files.push(fullPath);
    }
  }

  return files;
}

function isHero(filePath) {
  return filePath.endsWith(`${path.sep}hero-fence.jpg`);
}

async function optimizeFile(filePath) {
  const before = (await fs.stat(filePath)).size;
  const input = sharp(filePath, { failOn: "none" });
  const metadata = await input.metadata();
  const ext = path.extname(filePath).toLowerCase();

  let pipeline = sharp(filePath, { failOn: "none" });

  if (ext === ".jpg" || ext === ".jpeg") {
    const maxWidth = isHero(filePath) ? HERO_MAX_WIDTH : PROJECT_JPEG_MAX_WIDTH;

    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({
        width: maxWidth,
        withoutEnlargement: true,
      });
    }

    pipeline = pipeline.jpeg(JPEG_OPTIONS);
  } else if (ext === ".png") {
    if (metadata.width && metadata.width > PROJECT_JPEG_MAX_WIDTH) {
      pipeline = pipeline.resize({
        width: PROJECT_JPEG_MAX_WIDTH,
        withoutEnlargement: true,
      });
    }

    pipeline = pipeline.png(PNG_OPTIONS);
  } else {
    return null;
  }

  const buffer = await pipeline.toBuffer();
  const tempPath = `${filePath}.optimized`;

  await fs.writeFile(tempPath, buffer);
  await fs.rename(tempPath, filePath);

  const after = (await fs.stat(filePath)).size;

  return {
    file: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
    before,
    after,
    savingPercent: before > 0 ? Math.round(((before - after) / before) * 100) : 0,
  };
}

async function main() {
  const files = await collectLargeFiles(ROOT);

  if (files.length === 0) {
    console.log("No images over 1 MB found.");
    return;
  }

  const results = [];

  for (const filePath of files.sort()) {
    const result = await optimizeFile(filePath);

    if (result) {
      results.push(result);
      console.log(
        `${result.file}: ${formatSize(result.before)} → ${formatSize(result.after)} (${result.savingPercent}%)`,
      );
    }
  }

  console.log("\nSummary:");
  console.table(results);
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  return `${Math.round(bytes / 1024)} KB`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
