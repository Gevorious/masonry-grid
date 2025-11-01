import { useEffect, useRef, useState } from 'react';
import GridWrapper from './GridWrapper';
import Column from './Column';
import { calculateColumns, distributePhotos } from './actions';
import { Grid as GridProps, Photo } from './types';
import { debounce } from '../../utils/debounce';

const Grid = ({
  photos,
  columnWidth = 300,
  gap = 16,
  renderItem,
}: GridProps) => {
  const [columns, setColumns] = useState<Photo[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateColumns = debounce(() => {
      const width = containerRef.current!.clientWidth;
      const cols = calculateColumns(width, columnWidth, gap);
      setColumns(distributePhotos(photos, cols, columnWidth, gap));
    }, 100);

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [photos, columnWidth, gap]);

  return (
    <GridWrapper ref={containerRef} gap={gap}>
      {columns.map((col) => (
        <Column key={crypto.randomUUID() as string} gap={gap}>
          {col.map((photo) =>
            renderItem ? (
              renderItem(photo)
            ) : (
              <img
                key={photo.id}
                src={photo.src.medium}
                alt={photo.photographer}
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: 5,
                  opacity: 0,
                  transition: 'opacity 0.2s ease-in-out',
                }}
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              />
            ),
          )}
        </Column>
      ))}
    </GridWrapper>
  );
};

export default Grid;
