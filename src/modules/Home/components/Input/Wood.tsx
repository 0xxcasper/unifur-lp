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

interface IProps {
  label: string;
  subLabel?: string;
  error?: any;
  isRequired?: boolean;
  onChange: (data: string) => void;
  selected: string;
}

export interface IColor {
  name: string;
  image: string;
}

const WOOD_LIST = ['MDF chống ẩm', 'MDF không chống ẩm'];

const Wood = ({ label, isRequired = true, selected, onChange }: IProps) => {
  const renderItem = (item: string) => {
    return (
      <S.ColorItem
        key={item}
        onClick={() => {
          onChange(item);
        }}
      >
        <Text fontWeight="semibold" size="14">
          {item}
        </Text>
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
            {selected ? (
              <S.ColorItem key={selected}>
                <Text fontWeight="semibold">{selected}</Text>
                <S.ImgArrowDown src={ArrowDown} alt="arrow down" />
              </S.ColorItem>
            ) : (
              <>
                <Text style={{ opacity: 0.6 }}>Chọn loại ván gỗ</Text>
                <img src={ArrowDown} width="14px" alt="arrow down" />
              </>
            )}
          </S.DropdownLabel>
        }
        width={450}
      >
        <S.WoodContainer>{WOOD_LIST.map(renderItem)}</S.WoodContainer>
      </Dropdown>
    </S.Container>
  );
};

export default Wood;
