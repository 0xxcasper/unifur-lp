import styled, { css } from 'styled-components';
import { LayoutPadding } from '@/pages/layout';
import px2rem from '@/utils/px2rem';
import { MediaQueryBuilder } from '@/theme';

const ContainerLG = css`
  flex-direction: column;
  gap: 40px;
  max-width: none;
`;

const Container = styled(LayoutPadding)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  gap: 180px;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
  ${MediaQueryBuilder('lg', ContainerLG)}
`;

const BookingInfoXL = css`
  max-width: 100%;
`;
const BookingInfo = styled.div`
  //max-width: 30%;
  ${MediaQueryBuilder('xl', BookingInfoXL)}
`;

const BookingCategoriesLG = css`
  min-width: 100%;
  gap: 12px;
`;

const BookingCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 42px;
  max-width: 550px;
  .item-one {
    background: #556652;
    box-shadow: 36px 50px 75px 0 rgba(69, 96, 64, 0.22);
    grid-area: 2 / 1 / 4 / 2;
  }

  .item-two {
    background: rgba(36, 36, 36, 1);
    grid-area: 1 / 2 / 3 / 3;
  }

  .item-three {
    background: rgba(36, 36, 36, 1);
    grid-area: 4 / 1 / 4 / 2;
  }

  .item-four {
    background: #556652;
    box-shadow: 36px 50px 75px 0 rgba(69, 96, 64, 0.22);
    grid-area: 3 / 2 / 5 / 3;
  }

  ${MediaQueryBuilder('lg', BookingCategoriesLG)}
`;

const CategoryItem = styled.div`
  aspect-ratio: 370 / 390;
  border-radius: 36px;
  padding: ${px2rem(24)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    transition: all 0.3s linear;
  }
  .icon-wrapper {
    background: linear-gradient(180deg, #333e2c 0%, rgba(61, 61, 61, 0) 100%);
    border-radius: 200px;
    width: 60%;
    aspect-ratio: 1 / 1;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 80%;
    height: 80%;
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
  }
`;

export { Container, BookingInfo, BookingCategories, CategoryItem };
