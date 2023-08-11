import * as S from '@/modules/Home/components/Input/styled';
import React, { useState } from 'react';
import Dropdown from '@/components/Popover';
import Text from '@/components/Text';
import colors1 from '@/json/colors_1.json';
import colors2 from '@/json/colors_2.json';
import colors3 from '@/json/colors_3.json';
import colors4 from '@/json/colors_4.json';
import colors5 from '@/json/colors_5.json';
import ArrowDown from '@/components/Icons/ArrowDown.svg';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';

interface IProps {
  label: string;
  subLabel?: string;
  error?: any;
  isRequired?: boolean;
  onChange: (data: IColor) => void;
  selectedColor: IColor;
}

export interface IColor {
  name: string;
  image: string;
}

const COLORS_LIST = [...colors1, ...colors2, ...colors3, ...colors4, ...colors5];

const Colors = ({ label, isRequired = true, selectedColor, onChange }: IProps) => {
  const itemsPerPage = 10;
  const [hasMore, setHasMore] = useState(true);
  const [records, setRecords] = useState(itemsPerPage);

  const showItems = COLORS_LIST.slice(0, records);

  const loadMore = () => {
    if (records === COLORS_LIST.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setRecords(records + itemsPerPage);
      }, 2000);
    }
  };

  const renderItem = (item: { name: string; image: string }) => {
    return (
      <S.ColorItem
        key={item.name}
        onClick={() => {
          onChange({
            name: item.name,
            image: item.image,
          });
        }}
      >
        <S.ColorImage src={item.image} small={false} />
        <Text fontWeight="semibold">{item.name}</Text>
      </S.ColorItem>
    );
  };

  return (
    <S.Container>
      <S.Label>
        {label}
        {isRequired && <span className="required"> *</span>}
      </S.Label>
      <Dropdown
        unwrapElement={
          <S.DropdownLabel>
            {selectedColor.name ? (
              <S.ColorItem key={selectedColor.name}>
                <S.ColorImage src={selectedColor.image} small={true} />
                <Text fontWeight="semibold">{selectedColor.name}</Text>
              </S.ColorItem>
            ) : (
              <>
                <Text>Chọn màu</Text>
                <img src={ArrowDown} width="14px" alt="arrow down" />
              </>
            )}
          </S.DropdownLabel>
        }
        width={450}
      >
        <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasMore} useWindow={false}>
          <S.ColorsContainer>{showItems.map(renderItem)}</S.ColorsContainer>
        </InfiniteScroll>
      </Dropdown>
    </S.Container>
  );
};

export default Colors;
