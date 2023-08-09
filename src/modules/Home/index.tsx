import * as S from './styled';
import { Header } from '@/modules/Home/components/Header';
import { Booking } from '@/modules/Home/components/Booking';
import { Process } from '@/modules/Home/components/Process';
import { Footer } from '@/modules/Home/components/Footer';
import { FAQ } from '@/modules/Home/components/FAQ';
import { BookForm } from '@/modules/Home/components/BookForm';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <Booking />
      <Process />
      <BookForm />
      <FAQ />
      <Footer />
    </S.Container>
  );
};

export default Home;
