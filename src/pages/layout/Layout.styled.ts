import styled from 'styled-components';
import { BREAKPOINTS } from '@/theme';

export const PADDING = {
  SMALL: '16px',
  MEDIUM: '32px',
  LARGE: '60px',
};

const LayoutPadding = styled.div`
  padding-left: ${PADDING.SMALL};
  padding-right: ${PADDING.SMALL};
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-left: ${PADDING.MEDIUM};
    padding-right: ${PADDING.MEDIUM};
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-left: ${PADDING.LARGE};
    padding-right: ${PADDING.LARGE};
  }
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  //max-width: 1920px;
`;

export { Container, LayoutPadding };
