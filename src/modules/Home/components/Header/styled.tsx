import styled, { css } from 'styled-components';
import BGImage from '@/images/header.jpeg';
import { LayoutPadding } from '@/pages/layout';
import px2rem from '@/utils/px2rem';
import { MediaQueryBuilder } from '@/theme';

const ContainerMD = css`
  padding-bottom: ${px2rem(32)};
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-bottom: ${px2rem(60)};

  ${MediaQueryBuilder('md', ContainerMD)}
`;

const Background = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
`;

const ContentMD = css`
  margin-left: unset;
  p {
    text-align: center;
  }
`;

const ContentLG = css`
  // margin-left: ${px2rem(72)};
`;

const Content = styled(LayoutPadding)`
  width: 100%;
  max-width: 1580px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  ${MediaQueryBuilder('lg', ContentLG)}
  ${MediaQueryBuilder('md', ContentMD)}
`;

const AppLogo = styled.img`
  width: 220px;
  height: 32px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SpaceV = styled.div`
  height: 24px;
`;

const ShadowTextMD = css`
  text-align: center;
  font-size: ${px2rem(36)};
`;

const ShadowText = styled.div`
  font-size: ${px2rem(60)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #ffffff;
  text-shadow: 1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 1px #000000, -1px -1px #000000,
    1px -1px #000000, -1px 1px #000000;
  ${MediaQueryBuilder('md', ShadowTextMD)}
`;

const MainSectionMD = css`
  .main-text {
    font-size: ${px2rem(42)} !important;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(24)};
  .main-text {
    white-space: pre-line;
  }
  ${MediaQueryBuilder('md', MainSectionMD)}
`;

const ActionMD = css`
  margin-left: auto;
  margin-right: auto;
`;
const Action = styled.div`
  a {
    background: linear-gradient(182.67deg, rgba(20, 20, 20, 0.7) -96.84%, rgba(20, 20, 20, 0.7) 130.25%),
      linear-gradient(145.54deg, #aeaeae -1.62%, rgba(255, 255, 255, 0) 79.65%);
    padding: 12px 24px;
    color: ${({ theme }) => theme['txt-parallel']};
    border-radius: ${px2rem(12)};
    font-size: 16px;
    min-width: 180px;
    text-align: center;
  }
  ${MediaQueryBuilder('md', ActionMD)}
`;

export { Container, Background, Content, SpaceV, Action, ShadowText, MainSection, AppLogo };
