import * as S from './styled';
import Text from '@/components/Text';
import { ArrowRight } from 'react-bootstrap-icons';
import cs from 'classnames';
import ICSearch from '@/components/Icons/box.png';
import ICDelivery from '@/components/Icons/Ic_Delivery.svg';
import ICPencil from '@/components/Icons/colored-pencils.png';
import ICIdea from '@/components/Icons/idea.png';
import React from 'react';

interface ICategory {
  title: string;
  className: string;
  icon: any;
}
const CATEGORIES: ICategory[] = [
  {
    title: 'Giao hàng tận nơi',
    className: 'item-one',
    icon: ICDelivery,
  },
  {
    title: 'Thiết kế theo yêu cầu',
    className: 'item-two',
    icon: ICIdea,
  },
  {
    title: 'Nhận đặt sản phẩm lẻ',
    className: 'item-three',
    icon: ICSearch,
  },
  {
    title: 'Bảng màu đa dạng',
    className: 'item-four',
    icon: ICPencil,
  },
];

const Booking = () => {
  const renderItem = (item: ICategory) => {
    return (
      <S.CategoryItem className={cs(item.className)}>
        <div className="icon-wrapper">
          <img src={item.icon} className="icon" />
        </div>
        <Text size="20" fontWeight="medium" color="txt-parallel" align="center">
          {item.title}
        </Text>
      </S.CategoryItem>
    );
  };

  return (
    <S.Container>
      <S.BookingInfo>
        <Text size="56" fontWeight="medium">
          Đặt hàng theo yêu cầu
        </Text>
        <Text size="20" color="txt-secondary" className="mt-24 mb-24">
          UNIFUR.store chú trọng tính cá nhân hóa trong thiết kế và mức độ hoàn thiện của từng sản phẩm.
        </Text>
        <a href="https://unifur.store/pages/about-us" target="_blank" className="link">
          Liên hệ UNIFUR.store <ArrowRight />
        </a>
      </S.BookingInfo>
      <S.BookingCategories>{CATEGORIES.map(renderItem)}</S.BookingCategories>
    </S.Container>
  );
};

export default Booking;
