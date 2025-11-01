import { useEffect, useState } from 'react';
import { curatedPhotos } from '../api/pexels';
import { Photo } from '../components/Grid/types';
import Grid from '../components/Grid';

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    curatedPhotos().then((data) => {
      setPhotos(data.photos);
    });
  }, []);
  return (
    <div>
      <Grid photos={photos} />
    </div>
  );
};

export default Home;
