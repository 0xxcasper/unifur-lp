import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Meta from './Meta';
// import Header from './Header';
import { Container } from '@/pages/layout';

const LayoutOutlet = () => {
  return (
    <>
      <Meta />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default LayoutOutlet;
