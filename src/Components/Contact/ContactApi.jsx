const API_URL = import.meta.env.VITE_API_URL || "https://portfolio-contact-api-0uew.onrender.com/api/v1/contact/";

export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || data.error || "Failed to send message");
    }

    return { success: true, message: data.message || "Message sent successfully!" };
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};