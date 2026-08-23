import fs from "fs";
import path from "path";

/** Проверяет наличие файла в /public (для placeholder до загрузки фото). */
export function publicImageExists(imagePath: string): boolean {
  const relative = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  try {
    return fs.existsSync(path.join(process.cwd(), "public", relative));
  } catch {
    return false;
  }
}

export function getPublicImageFilename(imagePath: string): string {
  return imagePath.split("/").pop() ?? imagePath;
}
