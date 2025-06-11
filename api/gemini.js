

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Parse the prompt from the request body
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "Prompt is required" });
    return;
  }

  // Dynamically import the GoogleGenAI SDK
  const { GoogleGenAI } = await import("@google/genai");

  // Get the API key from environment variables
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Gemini API key not set in environment variables" });
    return;
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // Handle the response format
    const text = response.text ? response.text.replace(/\n/g, "<br/>") : "";
    res.status(200).json({ result: text });
  } catch (error) {
    // Log error for debugging
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message || "Error generating content" });
  }
}
