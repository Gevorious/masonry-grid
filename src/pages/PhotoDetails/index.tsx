import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { usePhotoDetails } from './hooks/usePhotoDetails';
import { Image, Info } from './styles';
import Spinner from '../../components/Spinner';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useRecentStore } from '../../store/useRecentStore';
import { Photo } from '../../components/Grid/types';
import './styles.css';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '../../components/PhotoCard';

const PhotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { photo, isLoading, error } = usePhotoDetails(Number(id));
  const { id: photoId, src, photographer, alt } = (photo as Photo) || {};
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const addItem = useRecentStore((state) => state.addItem);

  useEffect(() => {
    if (photo) {
      addItem({ id: photoId, thumbnail: src.tiny, photographer });
    }
  }, [photo]);

  if (isLoading)
    return (
      <div className="spinner-wrapper">
        <Spinner />
      </div>
    );
  if (error) {
    throw error;
  }

  if (!photo) {
    return null;
  }

  return (
    <div className="photo-details">
      <Card style={{ visibility: isImgLoaded ? 'visible' : 'hidden' }}>
        <CardHeader>
          <BackButton onClick={() => navigate(-1)}>
            <FaLongArrowAltLeft size={20} /> Back
          </BackButton>
        </CardHeader>
        <CardBody>
          <Image
            src={src.large}
            alt={photo.alt}
            onLoad={() => setIsImgLoaded(true)}
          />
        </CardBody>
        <CardFooter>
          <Info>
            <p>
              <strong>Photographer: </strong>
              <em>{photographer}</em>
            </p>
            <p>{alt || 'No description available'}</p>
          </Info>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PhotoDetails;
