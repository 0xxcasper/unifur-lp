import styled, { css } from 'styled-components';
import BGImage from '@/images/bg.jpg';
import { LayoutPadding, PADDING } from '@/pages/layout';
import { Row } from '@/components/Row';
import px2rem from '@/utils/px2rem';
import { BREAKPOINTS, MediaQueryBuilder } from '@/theme';

const Container = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 32px;
`;

const Content = styled(LayoutPadding)`
  width: 100%;
  .ic-logo {
    width: 244px;
    height: 32px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const RowContentXL = css`
  flex-direction: column-reverse;
  gap: 40px;
  .section-left {
    width: 100%;
    .desc-text,
    .link {
      font-size: 18px;
    }
  }
  .section-center {
    .main-text {
      white-space: pre-line;
      font-size: 38px;
    }
  }
`;

const RowContent = styled(Row)`
  margin-top: 24px;
  gap: 124px;
  .section-left {
    width: ${px2rem(380)};
    background-color: rgba(1, 1, 1, 0.4);
    padding: 24px;
    border-radius: 12px;
    .link {
      color: rgba(210, 255, 175, 1);
      font-size: 24px;
      line-height: 150%;
      svg {
        margin-left: 12px;
      }
    }
  }
  .section-center {
    .main-text {
      white-space: pre-line;
    }
  }
  ${MediaQueryBuilder('xl', RowContentXL)}
`;

const SectionRight = styled.div`
  .link {
    background: linear-gradient(182.67deg, rgba(20, 20, 20, 0.7) -96.84%, rgba(20, 20, 20, 0.7) 130.25%),
      linear-gradient(145.54deg, #aeaeae -1.62%, rgba(255, 255, 255, 0) 79.65%);
    padding: 12px 24px;
    color: ${({ theme }) => theme['txt-parallel']};
    border-radius: 12px;
    font-size: 18px;
    min-width: 180px;
    text-align: center;
    position: absolute;
  }
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  align-self: end;
  position: absolute;
  bottom: 5%;
  right: ${PADDING.SMALL};
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    right: ${PADDING.MEDIUM};
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    right: ${PADDING.LARGE};
  }
`;

const SpaceV = styled.div`
  height: 24px;
`;

export { Container, Content, RowContent, SpaceV, SectionRight };
