import { exec } from "child_process";
import { promisify } from "util";

const asyncExecute = promisify(exec);

export async function executeCommand({ command }) {
  try {
    const { stdout, stderr } = await asyncExecute(command);

    if (stderr) {
      return `Error: ${stderr}`;
    }

    return `Success: ${stdout} || Task executed completely`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
