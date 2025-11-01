import { Photo } from './types';

export const calculateColumns = (
  containerWidth: number,
  columnWidth: number,
  gap: number,
) => Math.max(Math.floor(containerWidth / (columnWidth + gap)), 1);

export const distributePhotos = (
  photos: Photo[],
  columnsCount: number,
  columnWidth: number,
  gap: number,
) => {
  const cols: Photo[][] = Array.from({ length: columnsCount }, () => []);
  const heights = new Array(columnsCount).fill(0);

  photos.forEach((photo) => {
    const minHeightIndex = heights.indexOf(Math.min(...heights));
    cols[minHeightIndex].push(photo);
    const ratio = photo.height / photo.width;
    heights[minHeightIndex] += columnWidth * ratio + gap;
  });

  return cols;
};
