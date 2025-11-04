import type { Photo } from '../components/Grid/types';

export function getVisiblePhotos(
  pages: Record<number, Photo[]>,
  currentPage: number,
) {
  const min = Math.max(1, currentPage - 1);
  const max = currentPage + 1;
  const merged: Photo[] = [];
  for (let p = min; p <= max; p++) {
    const arr = pages[p];
    if (arr && arr.length) merged.push(...arr);
  }
  return merged;
}
