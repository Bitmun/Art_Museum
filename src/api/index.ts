const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DEFAULT_FIELDS =
  'id,title,artist_title,is_public_domain,date_display,place_of_origin,dimensions,credit_line';

export const fetchInstance = async (endpoint: string = '', options?: RequestInit) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  const params = new URLSearchParams(url.search);

  if (!params.has('fields')) {
    params.append('fields', DEFAULT_FIELDS);
  }

  url.search = params.toString();

  const response = await fetch(url.toString(), options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
