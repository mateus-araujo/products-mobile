import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';

import { useTheme } from 'styled-components';

import {
  ActivityIndicatorContainer,
  ModalBackground,
} from './ModalLoading.styles';

interface Props {
  loading: boolean;
}

export default function ModalLoading({ loading }: Props) {
  const { colors } = useTheme();

  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <ModalBackground>
        <ActivityIndicatorContainer>
          <ActivityIndicator color={colors.primary} animating={loading} />
        </ActivityIndicatorContainer>
      </ModalBackground>
    </Modal>
  );
}
