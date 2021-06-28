import React from 'react';

import {
  FloatActionButtonContainer,
  FloatActionButtonIcon,
} from './FloatActionButton.styles';

interface Props {
  onPress(): void;
}

export default function FloatActionButton({ onPress }: Props) {
  return (
    <FloatActionButtonContainer onPress={onPress}>
      <FloatActionButtonIcon />
    </FloatActionButtonContainer>
  );
}
