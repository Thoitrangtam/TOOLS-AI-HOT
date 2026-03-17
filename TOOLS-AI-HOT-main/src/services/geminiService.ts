import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateAINews(language: 'en' | 'vi') {
  const prompt = language === 'en' 
    ? "Generate 3 short, professional AI news headlines and summaries for today. Format as JSON array: [{title, summary, date}]."
    : "Tạo 3 tiêu đề và tóm tắt tin tức AI chuyên nghiệp, ngắn gọn cho ngày hôm nay. Định dạng mảng JSON: [{title, summary, date}].";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error generating news:", error);
    return [];
  }
}
