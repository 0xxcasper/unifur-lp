import styled, { css } from 'styled-components';
import px2rem from '@/utils/px2rem';
import { MediaQueryBuilder } from '@/theme';
import BGImage from '@/images/book.jpeg';
import { LayoutPadding } from '@/pages/layout';
import { Button } from 'react-bootstrap';

const ContainerMD = css`
  padding-bottom: ${px2rem(32)};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: ${px2rem(160)};
  ${MediaQueryBuilder('md', ContainerMD)}
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 72px;
`;

const Content = styled(LayoutPadding)`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form``;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(32)};
`;

const Space = styled.div`
  height: ${px2rem(32)};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${px2rem(32)};
  flex-wrap: wrap;
`;

const ButtonSubmit = styled.button`
  margin-top: 32px;
  display: flex;
  min-width: 380px;
  height: 50px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 36px;
  background: #242424;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  :hover {
    opacity: 0.9;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: #242424;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  background: #494f46;
  color: #ffffff;
`;

export { Container, Content, Form, FormContent, Space, Row, ButtonSubmit, HeaderSection };
