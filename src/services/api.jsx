const BASE_URL = 'https://win25-jsf-assignment.azurewebsites.net/api';

async function handleError(res, defaultMessage) {
  let errorBody = {};
  try {
    errorBody = await res.json();
  } catch {}
  const error = new Error(errorBody.message || defaultMessage);
  error.status = res.status;
  error.data = errorBody;
  throw error;
}

export const sendSubscribe = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      await handleError(res, 'Kunde inte skicka formulär');
    }

    return await res.json();

  } catch (err) {
    console.error('API error (subscribe):', err);
    throw err;
  }
};

export const sendContact = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      await handleError(res, "Kunde inte skicka kontaktformulär");
    }

    return await res.json();

  } catch (err) {
    console.error("API error (contact):", err);
    throw err;
  }
};

export const sendBooking = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      await handleError(res, "Kunde inte skicka bokningsformulär");
    }

    return await res.json();

  } catch (err) {
    console.error("API error (booking):", err);
    throw err;
  }
};

export const getFaqs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/faqs`);
    if (!res.ok) throw new Error('Kunde inte hämta FAQs');
    return await res.json();
  } catch (err) {
    console.error('API error (faqs):', err);
    throw err;
  }
};

export const getTestimonials = async () => {
  try {
    const res = await fetch(`${BASE_URL}/testimonials`);
    if (!res.ok) throw new Error("Kunde inte hämta testimonials");
    return await res.json();
  } catch (err) {
    console.error("API error (testimonials):", err);
    throw err;
  }
};

export const getBlogs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/blogs`);
    if (!res.ok) throw new Error("Kunde inte hämta bloggar");
    return await res.json();
  } catch (err) {
    console.error("API error (blogs):", err);
    throw err;
  }
};
