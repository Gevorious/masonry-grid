import { memo } from 'react';
import { useVisibilityObserver } from '../../../hooks/useVisibilityObserver';
import { Wrapper, Placeholder, Image } from './VirtualPhotoPartials';
import { VirtualPhotoProps } from '../types';

const VirtualPhoto = ({ photo }: VirtualPhotoProps) => {
  const { ref, isVisible } = useVisibilityObserver();
  const ratio = `${photo.width} / ${photo.height}`;

  return (
    <Wrapper ref={ref} $ratio={ratio}>
      {isVisible ? (
        <Image
          src={photo.src.medium}
          alt={photo.photographer}
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
        />
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

export default memo(VirtualPhoto);
