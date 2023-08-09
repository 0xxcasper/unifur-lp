import styled from 'styled-components';
import px2rem from '@/utils/px2rem';

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  opacity: 0.8;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${px2rem(4)};
`;

const Input = styled.input`
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  background-color: white;
  padding: 0 16px;
`;

const Error = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ff0000;
`;

export { Container, Label, Input, Error };
