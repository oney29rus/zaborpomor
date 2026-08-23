#!/usr/bin/env node
/**
 * Генерация favicon и apple-touch-icon из logo.png
 * Запуск: node scripts/generate-favicons.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const LOGO = path.join(process.cwd(), "public", "images", "projects", "logo.png");
const APP_DIR = path.join(process.cwd(), "app");

async function main() {
  const logo = sharp(LOGO).ensureAlpha();

  const icon32 = await logo.clone().resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
  const icon192 = await logo.clone().resize(192, 192, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
  const apple180 = await logo.clone().resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();

  await fs.writeFile(path.join(APP_DIR, "favicon.ico"), icon32);
  await fs.writeFile(path.join(APP_DIR, "icon.png"), icon192);
  await fs.writeFile(path.join(APP_DIR, "apple-icon.png"), apple180);

  console.log("Generated app/favicon.ico, app/icon.png, app/apple-icon.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
