import { StyledImg } from './styles';

const Thumbnail = ({ src, size = 50 }: { src: string; size?: number }) => {
  return <StyledImg src={src} size={size} alt="thumbnail" />;
};

export default Thumbnail;
