import styled, { css } from 'styled-components';
import px2rem from '@/utils/px2rem';
import { MediaQueryBuilder } from '@/theme';

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

const DropdownLabel = styled.div`
  padding: 0 16px !important;
  min-height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  :hover {
    opacity: 0.8;
  }
  ${InputCss}
  p {
    font-size: 20px !important;
    font-weight: 500 !important;
  }
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

const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 400px;
  overflow-y: scroll;
  gap: ${px2rem(16)};
`;

const ColorItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  flex: 1;
  :hover {
    opacity: 0.8;
  }
`;

const ColorImage = styled.img<{ small: boolean }>`
  width: 70%;
  max-width: ${props => (props.small ? '150px' : '300px')};
  height: ${props => (props.small ? '35px' : '70px')};

  ${MediaQueryBuilder(
    'md',
    css`
      width: 50%;
    `,
  )}
`;

export {
  Container,
  Label,
  Input,
  Error,
  TextArea,
  Row,
  SubLabel,
  DropdownLabel,
  ColorsContainer,
  ColorItem,
  ColorImage,
};
