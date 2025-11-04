import { useEffect, useState } from 'react';
import { getPhotoDetails } from '../../../api/pexels';
import type { Photo } from '../../../components/Grid/types';

export const usePhotoDetails = (id: number) => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getPhotoDetails(id);
        setPhoto(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhoto();
  }, [id]);

  return { photo, isLoading, error };
};
