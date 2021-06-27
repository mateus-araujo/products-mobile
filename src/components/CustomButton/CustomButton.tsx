import React from 'react';

import {
  CustomButtonContainer,
  CustomButtonText,
  CustomButtonType,
} from './CustomButton.styles';

interface Props {
  label: string;
  onPress?(): void;
  type?: CustomButtonType;
}

export default function CustomButton({ label, onPress, type }: Props) {
  return (
    <CustomButtonContainer type={type || 'default'} onPress={onPress}>
      <CustomButtonText type={type || 'default'}>{label}</CustomButtonText>
    </CustomButtonContainer>
  );
}
