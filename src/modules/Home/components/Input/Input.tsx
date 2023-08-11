import * as S from '@/modules/Home/components/Input/styled';
import React from 'react';
import { SubLabel } from '@/modules/Home/components/Input/styled';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subLabel?: string;
  error?: any;
  isRequired?: boolean;
  isTextArea?: boolean;
}

const Input = ({ label, error, isRequired = true, isTextArea = false, subLabel, ...rest }: IProps) => {
  return (
    <S.Container>
      <S.Label>
        {label}
        {isRequired && <span className="required"> *</span>}
      </S.Label>
      <S.Row>
        {isTextArea ? <S.TextArea {...(rest as any)} /> : <S.Input {...rest} />}
        {!!subLabel && <S.SubLabel>{subLabel}</S.SubLabel>}
      </S.Row>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default Input;
