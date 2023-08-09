import styled, { css } from 'styled-components';
import { LayoutPadding } from '@/pages/layout';
import { MediaQueryBuilder } from '@/theme';

const ContainerMD = css`
  flex-direction: column;
  gap: 40px;
  margin-top: 24px;
  max-width: none;
`;

const Container = styled(LayoutPadding)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  gap: 240px;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 72px;
  ${MediaQueryBuilder('md', ContainerMD)}
`;

const Content = styled.div``;

const ProcessListXL = css`
  max-width: 100%;
`;

const ProcessListXS = css`
  max-width: 100%;
  .item {
    width: 80vw !important;
  }

  .item-secondary {
    margin-left: 16px;
  }
`;

const ProcessList = styled.div`
  gap: 38px;
  display: flex;
  flex-direction: column;
  ${MediaQueryBuilder('xl', ProcessListXL)}
  ${MediaQueryBuilder('xs', ProcessListXS)}
  .item {
    color: white;
    width: 500px;
    padding: 16px;
    border-radius: 36px;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
      transition: all 0.3s linear;
    }
  }
  .item-primary {
    background: rgba(85, 102, 82, 1);
    box-shadow: 36px 50px 75px 0 rgba(69, 96, 64, 0.22);
  }
  .item-secondary {
    background: rgba(36, 36, 36, 1);
    margin-left: 42px;
  }
`;

export { Container, Content, ProcessList };
