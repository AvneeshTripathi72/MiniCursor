import fs from "fs/promises";
import path from "path";

export async function writeToFile({ filePath, content }) {
  try {
    // Ensure the directory exists
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });

    // Write the file
    await fs.writeFile(filePath, content, "utf-8");

    return `Success: File written to ${filePath}`;
  } catch (error) {
    return `Error: Failed to write file. ${error.message}`;
  }
}
