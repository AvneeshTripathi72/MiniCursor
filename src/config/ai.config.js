import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import os from "os";

dotenv.config();

export const platform = os.platform();

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});
