import { useCallback, useState } from 'react';
import { Photo } from '../../../components/Grid/types';
import { searchPhotos } from '../../../api/pexels';

export const useSearchPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const search = useCallback(async (searchTerm: string) => {
    if (!searchTerm) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await searchPhotos(searchTerm);
      setPhotos(data.photos);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('An unknown error occurred'));
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { photos, isLoading, error, search };
};
