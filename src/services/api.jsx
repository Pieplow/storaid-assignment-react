const BASE_URL = 'https://win25-jsf-assignment.azurewebsites.net/api';

export const sendSubscribe = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Kunde inte skicka formulär');
    return await res.json();
    
  } catch (err) {
    console.error('API error:', err);
    throw err;
  }
};