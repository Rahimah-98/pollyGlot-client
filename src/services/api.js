export const fetchTranslation = async (text, language) => {
  const response = await fetch(import.meta.env.VITE_WORKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      language,
    }),
  });

  if (!response.ok) {
    throw new Error('Translation failed');
  }

  const data = await response.json();
  return data.translation;
};
