import styled, { css } from 'styled-components';
import BGImage from '@/images/faq1.jpeg';
import { LayoutPadding } from '@/pages/layout';
import px2rem from '@/utils/px2rem';
import { MediaQueryBuilder } from '@/theme';

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
  margin-top: 32px;
`;

const Content = styled(LayoutPadding)`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
`;

const AccordionWrapper = styled.div`
  margin-right: auto;
  flex: 1;
  width: 100%;
  margin-top: 72px;
  max-width: 65%;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 32px;
  border-radius: 12px;
  ${MediaQueryBuilder(
    'md',
    css`
      max-width: 100%;
    `,
  )}
`;

export { Container, Content, AccordionWrapper };
