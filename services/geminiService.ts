
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getDashboardInsights(data: any): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analysiere die folgenden Dashboard-Daten und gib eine kurze, professionelle Zusammenfassung auf Deutsch: ${JSON.stringify(data)}`,
        config: {
          systemInstruction: "Du bist ein erfahrener Business-Analyst. Deine Antworten sind präzise, professionell und hilfreich.",
          temperature: 0.7,
        }
      });
      return response.text || "Keine Einsichten verfügbar.";
    } catch (error) {
      console.error("Gemini Insight Error:", error);
      return "Fehler beim Laden der KI-Einblicke.";
    }
  }

  async chatWithAI(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "Du bist ein hilfreicher Assistent für das Management-Dashboard.",
        }
      });
      return response.text || "Entschuldigung, ich konnte keine Antwort generieren.";
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return "Fehler in der Kommunikation mit der KI.";
    }
  }
}

export const geminiService = new GeminiService();
