
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `You are "CuraBot", the Lead Medical Product Specialist for Dermeda Medical. 
Your role is to provide rapid, technical, and high-impact advice to healthcare procurement professionals.

Dermeda Catalog Overview:
${PRODUCTS.map(p => `- ${p.name} (${p.category}): ${p.description}. Specs: ${JSON.stringify(p.specs)}`).join('\n')}

Communication Protocol (Crucial):
- BE EXTREMELY CONCISE. Avoid fluff or long introductions.
- FORMAT: Use a "Pinch of Salt" style. 
  - Use bullet points for key technical specs.
  - Use **bold text** for product names and critical standards (AQL, ISO).
  - Use short, punchy sentences.
- TECHNICAL FOCUS: Prioritize Material, AQL rating, and Packing configuration.
- MEDICAL LOGIC: 
  - Latex Allergy? -> **Nitrile** or **Vinyl** only.
  - High Risk/Chemo? -> **Nitrile** (DNG-M100).
  - Extended Coverage? -> **Elbow Gloves** (EG-series).
- CALL TO ACTION: End with a single short line referencing the "Request Quote" button for bulk orders.`;

export async function getGloveRecommendation(userPrompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2, // Even lower for maximum precision and brevity
      },
    });

    return response.text || "Technical error. Please contact procurement@dermeda.medical directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Database offline. Please refer to the technical specs table below or contact support.";
  }
}
