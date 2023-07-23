import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Meta from './Meta';
// import Header from './Header';
import { Container, ContentWrapper } from '@/pages/layout';

const LayoutOutlet = () => {
  return (
    <>
      <Meta />
      {/*<Header />*/}
      <Container>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default LayoutOutlet;
