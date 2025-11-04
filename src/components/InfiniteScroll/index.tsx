import styled from 'styled-components';
import { memo, useEffect, useRef } from 'react';
import type { InfiniteScrollProps } from './types';
import { throttle } from '../../utils/throttle';

const ScrollWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Sentinel = styled.div`
  height: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InfiniteScroll = ({
  children,
  onLoadMore,
  disabled,
}: InfiniteScrollProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const throttledLoadMore = useRef(throttle(onLoadMore, 400)).current;

  useEffect(() => {
    if (disabled) return;
    const el = bottomRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          throttledLoadMore();
        }
      },
      { rootMargin: '50px', threshold: 1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [disabled]);

  return (
    <ScrollWrapper>
      {children}
      <Sentinel ref={bottomRef} />
    </ScrollWrapper>
  );
};

export default memo(InfiniteScroll);
