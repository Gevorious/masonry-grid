import { useCallback, useEffect, useRef, useState } from 'react';
import { curatedPhotos, searchPhotos } from '../../../api/pexels';
import type { Photo } from '../../../components/Grid/types';
import type { UsePhotoDataProps } from '../types';

export const usePhotoData = ({
  searchTerm,
  perPage = 25,
}: UsePhotoDataProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = searchTerm
        ? await searchPhotos(searchTerm)
        : await curatedPhotos(page, perPage);

      setPhotos((prev) =>
        page === 1 ? data.photos : [...prev, ...data.photos],
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('An unknown error occurred'));
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [page, searchTerm, perPage]);

  useEffect(() => {
    setPage(1);
    setPhotos([]);
    setError(null);
  }, [searchTerm]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (searchTerm) return;

    const el = bottomRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: '200px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isLoading, searchTerm]);

  return { photos, isLoading, error, bottomRef };
};
