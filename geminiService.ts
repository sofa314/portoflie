
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, SKILL_MATRIX, PERSONAL_INFO } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "AI Twin" of Youssef Ali, a Software Engineer and Computer Engineering graduate.
Your goal is to answer questions from potential employers or collaborators about Youssef's background, projects, and skills.

Context about Youssef:
- Projects: ${JSON.stringify(PROJECTS)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Skills: ${JSON.stringify(SKILL_MATRIX)}
- Bio: ${PERSONAL_INFO.bio}

Tone: Professional, helpful, technically accurate, and slightly enthusiastic.
Keep responses concise (under 3 sentences where possible). If asked about something not in the context, politely state you don't have that specific information but highlight a related strength.
`;

export const chatWithYoussefAI = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Feel free to explore the manual sections of my portfolio!";
  }
};
