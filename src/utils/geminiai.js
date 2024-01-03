import { GEMINI_KEY } from "./constants";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export default genAI;
