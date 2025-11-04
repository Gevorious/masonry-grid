import { useCallback, useEffect, useState } from 'react';
import { curatedPhotos } from '../../../api/pexels';
import { Photo } from '../../../components/Grid/types';

export const useCuratedPhotos = (perPage = 25) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const changePage = () => {
    setPage((prev) => prev + 1);
  };

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await curatedPhotos(page, perPage);
      setPhotos((prev) => [...prev, ...data.photos]);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('An unknown error occurred'));
      }
    } finally {
      setIsLoading(false);
    }
  }, [page, perPage]);

  useEffect(() => {
    loadMore();
  }, [page]);

  return { photos, isLoading, error, changePage, loadMore };
};
