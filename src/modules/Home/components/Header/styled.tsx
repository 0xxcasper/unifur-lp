import styled from 'styled-components';
import BGImage from '@/images/background.jpg';

const Container = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
  width: 100%;
  height: 100vh;
`;

export { Container };
