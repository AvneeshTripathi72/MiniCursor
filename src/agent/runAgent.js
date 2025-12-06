import { ai, platform } from "../config/ai.config.js";
import { executeCommand } from "../tools/execute.tool.js";
import { writeToFile } from "../tools/file.tool.js";
import { executeCommandDeclaration, writeToFileDeclaration } from "../tools/tool.declaration.js";

const History = [];

const availableTools = {
  executeCommand,
  writeToFile
};

export async function runAgent(userProblem) {

  History.push({
    role: "user",
    parts: [{ text: userProblem }]
  });

  while (true) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: History,
      config: {
        systemInstruction: `
You are a Website Builder AI.
User OS: ${platform}

Steps:
1. Create folder
2. Create HTML, CSS, JS
3. Write frontend code

Give one command at a time.
Use 'writeToFile' to create or update files.
`,
        tools: [{
          functionDeclarations: [executeCommandDeclaration, writeToFileDeclaration]
        }]
      }
    });

    if (response.functionCalls?.length > 0) {

      const { name, args } = response.functionCalls[0];

      const result = await availableTools[name](args);

      History.push({
        role: "model",
        parts: [{ functionCall: response.functionCalls[0] }]
      });

      History.push({
        role: "user",
        parts: [{
          functionResponse: {
            name,
            response: { result }
          }
        }]
      });

    } else {
      console.log(response.text);

      History.push({
        role: "model",
        parts: [{ text: response.text }]
      });

      break;
    }
  }
}
