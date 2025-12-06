# Mini Cursor AI ⚡

A modular, AI-powered coding assistant that can execute terminal commands and write files to your system. Built with Google Gemini.

## Features
- **Terminal Execution**: Can run shell commands (mkdir, npm install, etc.).
- **File Writing**: Can create and update files with code.
- **Modular Structure**: Clean, production-ready architecture.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Configure API Key**:
    - Rename `.env.example` to `.env` (or create one).
    - Add your Gemini API key:
      ```env
      GEMINI_API_KEY=your_api_key_here
      ```

## Usage

Run the agent:
```bash
node index.js
```

Then ask it to do things like:
- "Create a simple HTML website"
- "Make a folder named 'test'"
- "Write a Python script to calculate fibonacci"

## Structure
- `src/config`: Configuration files.
- `src/tools`: Tool definitions (execute, file writer).
- `src/agent`: Core AI agent logic.

## Example Interaction

```text
User: Create a portfolio website
Agent: Okay, let's create a portfolio website! Please provide a name for your portfolio website's folder.
User: my_portfolio
Agent: Your portfolio website has been created in the `my_portfolio` folder!
       You can find the following files:
       * my_portfolio/index.html
       * my_portfolio/style.css
       * my_portfolio/script.js

User: Create a course selling website
Agent: I've created a course selling website for you!
       You can find the files in the `course-selling-website` directory:
       - `index.html`: The main HTML file.
       - `style.css`: The CSS file for styling.
       - `script.js`: The JavaScript file for interactivity.
```


