
import { GoogleGenAI } from "@google/genai";
import { CONTACT_DETAILS, SERVICES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are the AI Assistant for "B.K Chemical Service" (also known as Askari Chemical Service) located in Karachi.
The proprietor is ${CONTACT_DETAILS.proprietor}.
The contact number is ${CONTACT_DETAILS.phone}.
The email is ${CONTACT_DETAILS.email}.
The address is ${CONTACT_DETAILS.address}.

Our services include: ${SERVICES.map(s => s.title).join(", ")}.

Your goal is to help customers by answering questions about:
1. Leakage solutions for bathrooms, roofs, and tanks.
2. Termite proofing (Deemak) and pest control.
3. Heat insulation coatings for roofs.
4. Civil works and renovation.
5. Tank cleaning.

Guidelines:
- Be professional, polite, and helpful.
- For pricing or site visits, tell them to call ${CONTACT_DETAILS.phone} directly.
- Emphasize that we use high-quality chemicals and provide guarantees.
- Keep responses concise but informative.
- Use Urdu/Hindi phrases where natural if the user speaks in Roman Urdu, but maintain professional English standard.
`;

export const getGeminiChatResponse = async (history: { role: 'user' | 'model', content: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }]
      })),
      config: {
        systemInstruction,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us at 03123074381 for immediate assistance.";
  }
};
