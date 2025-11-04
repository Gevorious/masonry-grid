export type InfiniteScrollProps = {
  children: React.ReactNode;
  onLoadMore: () => void;
  disabled?: boolean;
};
