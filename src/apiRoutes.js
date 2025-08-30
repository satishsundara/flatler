export const postProperty = async (payload) => {
  try {
    const response = await fetch("/api/postproperty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to post property");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error posting property:", err);
    throw err;
  }
};
