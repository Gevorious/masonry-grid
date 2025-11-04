import { memo, useEffect, useRef, useState } from 'react';
import GridWrapper from './GridWrapper';
import Column from './Column';
import { calculateColumns, distributePhotos } from './actions';
import { Grid as GridProps, Photo } from './types';
import { debounce } from '../../utils/debounce';
import VirtualPhoto from './VirtualPhoto';

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
    }, 50);

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [photos, columnWidth, gap]);

  return (
    <GridWrapper ref={containerRef} gap={gap}>
      {columns.map((col, i) => {
        if (!col.length) return;
        return (
          <Column key={`${col[0].id}_${i}`} gap={gap}>
            {col.map((photo, j) =>
              renderItem ? (
                <div key={`${photo.id}_${j}`}> {renderItem(photo)}</div>
              ) : (
                <VirtualPhoto key={`${photo.id}_${j}`} photo={photo} />
              ),
            )}
          </Column>
        );
      })}
    </GridWrapper>
  );
};

export default memo(Grid);
