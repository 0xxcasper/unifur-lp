import styled, { css } from 'styled-components';
import px2rem from '@/utils/px2rem';

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
  .required {
    color: rgba(255, 0, 0, 0.7);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${px2rem(4)};
`;

const InputCss = css`
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  background-color: white;
  padding: 16px;
  border: 0;
  flex: 1;
`;

const Input = styled.input`
  height: 50px;
  ${InputCss}
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  ${InputCss}
`;

const Error = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 0, 0, 0.7);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${px2rem(16)};
  flex: 1;
  align-items: end;
`;

const SubLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
`;

export { Container, Label, Input, Error, TextArea, Row, SubLabel };
