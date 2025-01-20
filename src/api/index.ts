const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchInstance = async (endpoint: string = '', options?: RequestInit) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
