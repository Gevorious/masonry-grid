import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Grid from '../index';
import type { Photo } from '../types';

vi.mock('../../../utils/debounce', () => ({
  debounce: <T extends (...args: unknown[]) => unknown>(fn: T): T => fn,
}));

const mockPhotos: Photo[] = [
  {
    id: 1,
    width: 200,
    height: 400,
    alt: 'Photo 1',
    photographer: 'John Doe',
    src: { small: '', medium: '', large: '' },
    url: '',
  },
  {
    id: 2,
    width: 200,
    height: 300,
    alt: 'Photo 2',
    photographer: 'Jane Doe',
    src: { small: '', medium: '', large: '' },
    url: '',
  },
  {
    id: 3,
    width: 200,
    height: 250,
    alt: 'Photo 3',
    photographer: 'Sam',
    src: { small: '', medium: '', large: '' },
    url: '',
  },
];

describe('Grid Component', () => {
  let originalWidth: number;

  beforeEach(() => {
    originalWidth = window.innerWidth;
  });

  afterEach(() => {
    window.innerWidth = originalWidth;
  });

  it('renders correct number of columns based on container width', () => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: 700,
    });

    render(<Grid photos={mockPhotos} columnWidth={300} gap={20} />);

    const columns = screen.getAllByTestId('grid-column');
    expect(columns.length).toBe(2);
  });

  it('renders VirtualPhoto when no renderItem is provided', () => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: 1000,
    });

    render(<Grid photos={mockPhotos} />);
    expect(screen.getAllByTestId('virtual-photo')).toHaveLength(3);
  });

  it('uses renderItem when provided', () => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: 1000,
    });

    render(
      <Grid
        photos={mockPhotos}
        renderItem={(photo) => (
          <div data-testid={`photo-${photo.id}`}>{photo.alt}</div>
        )}
      />,
    );

    expect(screen.queryByTestId('virtual-photo')).not.toBeInTheDocument();
    expect(screen.getByTestId('photo-1')).toBeInTheDocument();
  });
});
