export const executeCommandDeclaration = {
  name: "executeCommand",
  description: "Execute a single terminal/shell command.",
  parameters: {
    type: "OBJECT",
    properties: {
      command: {
        type: "STRING",
        description: "Single terminal command. Example: mkdir project"
      }
    },
    required: ["command"]
  }
};

export const writeToFileDeclaration = {
  name: "writeToFile",
  description: "Write content to a file. Creates directories if they don't exist.",
  parameters: {
    type: "OBJECT",
    properties: {
      filePath: {
        type: "STRING",
        description: "Path to the file, e.g., src/index.html"
      },
      content: {
        type: "STRING",
        description: "The full content to write to the file."
      }
    },
    required: ["filePath", "content"]
  }
};
