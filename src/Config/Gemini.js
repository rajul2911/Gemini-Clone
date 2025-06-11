




export default async function main(prompt) {
  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    // Try to extract error message from response
    let errorMsg = "Failed to fetch AI response";
    try {
      const errorData = await response.json();
      if (errorData.error) errorMsg = errorData.error;
    } catch {}
    throw new Error(errorMsg);
  }

  const data = await response.json();
  return data.result;
}



