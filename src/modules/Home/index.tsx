import * as S from './styled';
import { Header } from '@/modules/Home/components/Header';
import { Booking } from '@/modules/Home/components/Booking';
import { Process } from '@/modules/Home/components/Process';
import { Footer } from '@/modules/Home/components/Footer';
import { FAQ } from '@/modules/Home/components/FAQ';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <Booking />
      <Process />
      <FAQ />
      <Footer />
    </S.Container>
  );
};

export default Home;
