import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { usePhotoDetails } from './hooks/usePhotoDetails';
import { Image, Info } from './partials';
import './styles.css';
import Spinner from '../../components/Spinner';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const PhotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { photo, isLoading, error } = usePhotoDetails(Number(id));

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
      <BackButton onClick={() => navigate(-1)}>
        <FaLongArrowAltLeft size={20} /> Back
      </BackButton>
      <div className="photo-details__content">
        <Image src={photo.src.large} alt={photo.alt} />
        <Info>
          <h2>{photo.alt || photo.photographer}</h2>
          <p>
            <strong>Photographer: </strong>
            {photo.photographer}
          </p>
          <p>
            <strong>Description: </strong>
            {photo.alt || 'No description available'}
          </p>
        </Info>
      </div>
    </div>
  );
};

export default PhotoDetails;
