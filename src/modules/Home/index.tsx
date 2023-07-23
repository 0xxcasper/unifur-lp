import * as S from './styled';
import { Header } from '@/modules/Home/components/Header';
import { Booking } from '@/modules/Home/components/Booking';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <Booking />
    </S.Container>
  );
};

export default Home;
