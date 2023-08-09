import * as S from '@/modules/Home/components/Input/styled';
import React from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: any;
}

const Input = ({ label, error, ...rest }: IProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default Input;
