import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateSummary = async (insights) => {

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
You are a sales analyst.

Create a professional executive summary based on this sales data.

Total Revenue: ${insights.totalRevenue}
Total Units Sold: ${insights.totalUnits}
Cancelled Orders: ${insights.cancelledOrders}

Write a concise business summary (5-6 lines).
`;

  const result = await model.generateContent(prompt);

  const response = await result.response;

  return response.text();
};