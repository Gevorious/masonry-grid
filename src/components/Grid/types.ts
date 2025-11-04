export type Photo = {
  id: number;
  src: { small: string; medium: string; large2x: string };
  photographer: string;
  width: number;
  height: number;
  url: string;
};

export type Grid = {
  photos: Photo[];
  columnWidth?: number;
  gap?: number;
  renderItem?: (photo: Photo) => React.ReactNode;
};

export type GridWrapperProps = {
  gap: Grid['gap'];
};

export type ColumnProps = {
  gap: Grid['gap'];
};

export type VirtualPhotoProps = {
  photo: Photo;
};
