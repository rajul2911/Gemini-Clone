// export default async function main(prompt) {
//   const response = await fetch("/api/gemini", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt }),
//   });

//   if (!response.ok) {
//     // Try to extract error message from response
//     let errorMsg = "Failed to fetch AI response";
//     try {
//       const errorData = await response.json();
//       if (errorData.error) errorMsg = errorData.error;
//     } catch {}
//     throw new Error(errorMsg);
//   }

//   const data = await response.json();
//   return data.result;
// }


// const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// export default async function main(prompt) {
//   if (!prompt?.trim()) return "";

//   const response = await fetch(
//     `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [{ text: prompt }],
//           },
//         ],
//       }),
//     }
//   );

//   if (!response.ok) {
//     const err = await response.text();
//     throw new Error(err || "Gemini API error");
//   }

//   const data = await response.json();

//   return (
//     data.candidates?.[0]?.content?.parts?.[0]?.text ||
//     "No response from Gemini"
//   );
// }


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


