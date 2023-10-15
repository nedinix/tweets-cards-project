import { Container } from 'components/App/App.styled';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import NavigationBar from 'components/NavigationBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
