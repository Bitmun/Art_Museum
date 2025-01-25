import { DEFAULT_FIELDS, IMAGE_DEFAULT_PARAMS } from 'constants/params';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;

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

export const artWorkImgSrcBuilder = (id: number) => {
  return `${IMAGE_URL}/${id}/${IMAGE_DEFAULT_PARAMS}`;
};
