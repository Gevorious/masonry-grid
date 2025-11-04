import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { ErrorBoundary } from '../components/ErrorBoundary';

const Home = lazy(() => import('../pages/Home'));
const PhotoDetails = lazy(() => import('../pages/PhotoDetails'));

const AppRouter = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="spinner-wrapper">
            <Spinner size={40} />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary onReset={window.location.reload}>
                <Home />
              </ErrorBoundary>
            }
          />
          <Route
            path="/photo/:id"
            element={
              <ErrorBoundary onReset={() => window.history.back()}>
                <PhotoDetails />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRouter;
