import * as S from './styled';
import { Header } from '@/modules/Home/components/Header';
import { Booking } from '@/modules/Home/components/Booking';
import Process from './components/Process/Process';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <Booking />
      <Process />
    </S.Container>
  );
};

export default Home;
