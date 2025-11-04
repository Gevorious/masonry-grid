import { useState, useEffect } from 'react';
import Grid from '../../components/Grid';
import Search from '../../components/Search';
import Spinner from '../../components/Spinner';
import InfiniteScroll from '../../components/InfiniteScroll';
import { useCuratedPhotos } from './hooks/useCuratedPhotos';
import { useSearchPhotos } from './hooks/useSearchPhotos';
import './styles.css';
import VirtualPhoto from '../../components/Grid/VirtualPhoto';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const curated = useCuratedPhotos();
  const search = useSearchPhotos();

  const isSearching = !!searchTerm;

  useEffect(() => {
    if (isSearching) {
      search.search(searchTerm);
    }
  }, [searchTerm]);

  const { photos, isLoading, error } = isSearching ? search : curated;

  return (
    <div className="home">
      <div className="home__search">
        <Search onSearch={setSearchTerm} delay={300} />
      </div>

      {error && <div className="error">{error.message}</div>}

      {isSearching ? (
        <>
          <Grid
            photos={photos}
            renderItem={(photo) => (
              <Link to={`/photo/${photo.id}`}>
                <VirtualPhoto photo={photo} />
              </Link>
            )}
          />
          {isLoading && (
            <div className="spinner-wrapper">
              <Spinner />
            </div>
          )}
        </>
      ) : (
        <InfiniteScroll
          onLoadMore={curated.changePage}
          disabled={curated.isLoading}
        >
          <Grid
            photos={photos}
            renderItem={(photo) => (
              <Link to={`/photo/${photo.id}`}>
                <VirtualPhoto photo={photo} />
              </Link>
            )}
          />
          {isLoading && (
            <div className="spinner-wrapper">
              <Spinner />
            </div>
          )}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Home;
