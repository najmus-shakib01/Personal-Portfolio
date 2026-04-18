export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(
      `https://flower-sell-backend.vercel.app/api/v1/flower/contact/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};