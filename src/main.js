import readlineSync from "readline-sync";
import { runAgent } from "./agent/runAgent.js";

export async function startApp() {
  console.log("I am a Mini Cursor AI");

  while (true) {
    const userProblem = readlineSync.question("Ask me anything --> ");

    if (userProblem.toLowerCase() === "help") {
      console.log("\nAvailable Commands:");
      console.log("  - Type your request in plain English (e.g., 'Create a website')");
      console.log("  - 'exit' to stop the agent");
      console.log("\n");
      continue;
    }

    if (userProblem.toLowerCase() === "exit") {
      console.log("Goodbye! 👋");
      process.exit(0);
    }

    await runAgent(userProblem);
  }
}
