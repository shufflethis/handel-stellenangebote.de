import { GoogleGenAI } from "@google/genai";

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY || '';
  // In a real app, we would handle the missing key more gracefully in the UI
  return new GoogleGenAI({ apiKey });
};

export const getCareerAdvice = async (userQuery: string, context: string = 'General'): Promise<string> => {
  try {
    const ai = getClient();
    // Using gemini-2.5-flash for speed and efficiency for a chat interface
    const model = "gemini-2.5-flash"; 
    
    const systemPrompt = `
      Du bist ein erfahrener Karriere-Coach, spezialisiert auf den deutschen Handelssektor (Einzelhandel, Großhandel, E-Commerce).
      Du hilfst Bewerbern und Arbeitgebern auf der Plattform "handel-stellenangebote.de".
      Antworte professionell, motivierend und präzise auf Deutsch.
      Fasse dich kurz (max. 150 Wörter), es sei denn, es wird explizit mehr verlangt.
      Kontext: ${context}
    `;

    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    return response.text || "Entschuldigung, ich kann gerade keine Antwort generieren. Bitte versuchen Sie es später erneut.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Verbindung oder versuchen Sie es später.";
  }
};

export const optimizeJobDescription = async (originalDescription: string): Promise<string> => {
  try {
    const ai = getClient();
    const model = "gemini-2.5-flash";

    const systemPrompt = `
      Du bist ein HR-Experte für den Einzelhandel. Optimiere die folgende Stellenbeschreibung 
      für maximale Attraktivität und SEO-Sichtbarkeit.
      Strukturiere sie mit Markdown (Aufzählungszeichen, Fettdruck).
      Achte auf geschlechtsneutrale Sprache (m/w/d).
    `;

    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: originalDescription }] }
      ],
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || originalDescription;
  } catch (error) {
    console.error("Gemini optimization error", error);
    return originalDescription;
  }
};