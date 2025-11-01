import type { Photo } from '../components/Grid/types';

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = import.meta.env.VITE_PEXELS_API;

export const curatedPhotos = async (
  page = 1,
  per_page = 30,
): Promise<{ photos: Photo[] }> => {
  const res = await fetch(
    `${BASE_URL}/curated?page=${page}&per_page=${per_page}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const searchPhotos = async (
  query: string,
  page = 1,
  per_page = 30,
): Promise<{ photos: Photo[] }> => {
  const res = await fetch(
    `${BASE_URL}/search?query=${query}&page=${page}&per_page=${per_page}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    },
  );
  const data = await res.json();
  return data;
};
