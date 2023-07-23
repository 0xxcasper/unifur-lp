import styled from 'styled-components';
import BGImage from '@/images/background.jpg';
import { LayoutPadding } from '@/pages/layout';
import { Row } from '@/components/Row';
import px2rem from '@/utils/px2rem';

const Container = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
  width: 100%;
  height: 100vh;
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
  .section-right {
    .link {
      background: linear-gradient(182.67deg, rgba(20, 20, 20, 0.7) -96.84%, rgba(20, 20, 20, 0.7) 130.25%),
        linear-gradient(145.54deg, #aeaeae -1.62%, rgba(255, 255, 255, 0) 79.65%);
      padding: 12px 24px;
      color: ${({ theme }) => theme['txt-parallel']};
      border-radius: 12px;
      font-size: 18px;
      min-width: 180px;
      text-align: center;
    }
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    align-self: end;
  }
`;

const SpaceV = styled.div`
  height: 24px;
`;

export { Container, Content, RowContent, SpaceV };
