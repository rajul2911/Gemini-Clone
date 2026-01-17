

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export default async function main(prompt) {
  if (!prompt || !prompt.trim()) return "";

  // Validate API key exists
  if (!API_KEY) {
    throw new Error("REACT_APP_GEMINI_API_KEY is not configured. Please set it in your .env.local file.");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error: ${errText}`);
  }

  const data = await response.json();
  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response from Gemini"
  );
}


