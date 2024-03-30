import { GeminiApiKey } from '../constants'
import * as GoogleGenerativeAI from "@google/generative-ai"

export const GptCall = async (prompt, message) => {

    const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(GeminiApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
        const result = await model.generateContent(prompt);
        const response =  result.response;
        const text = response.text();
        // console.log(text)
        return text;
      } catch (error) {
        console.error("Error generating content:", error);
        return { success: false, msg: err.message };
      }
};

