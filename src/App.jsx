import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const TweetsPage = lazy(() => import('pages/TweetsPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
