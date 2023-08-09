import * as S from './styled';
import Text from '@/components/Text';
import { ArrowRight } from 'react-bootstrap-icons';
import React from 'react';
import Link from '@/modules/Home/components/Link.styled';

interface IProcess {
  title: string;
}
const PROCESS_LIST: IProcess[] = [
  {
    title: 'Gửi yêu cầu',
  },
  {
    title: 'Nhận báo giá',
  },
  {
    title: 'Thiết kế',
  },
  {
    title: 'Sản xuất tại xưởng',
  },
  {
    title: 'Giao Hàng',
  },
];

const Process = () => {
  const renderProcess = (item: IProcess, index: number) => {
    return (
      <div key={item.title} className={`item ${index % 2 === 1 ? 'item-primary' : 'item-secondary'}`}>
        <Text color="txt-parallel" align="center" size="24">
          {item.title}
        </Text>
      </div>
    );
  };

  return (
    <S.Container>
      <S.ProcessList>{PROCESS_LIST.map(renderProcess)}</S.ProcessList>
      <S.Content>
        <Text size="56" fontWeight="medium">
          Quy trình thực hiện
        </Text>
        <Text size="20" color="txt-secondary" className="mt-24 mb-24">
          Chỉ với 5 bước đơn giản, Quý khách sẽ sở hữu ngay món nội thất yêu thích của mình.
        </Text>
        <Link href="https://unifur.store/pages/about-us" target="_blank">
          Gửi yêu cầu <ArrowRight />
        </Link>
      </S.Content>
    </S.Container>
  );
};

export default Process;
