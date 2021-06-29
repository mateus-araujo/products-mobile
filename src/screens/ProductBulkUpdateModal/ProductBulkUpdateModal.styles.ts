import { View, Text } from 'react-native';

import styled from 'styled-components';

export const ModalBackground = styled(View)`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #00000040;
`;

export const ModalContentContainer = styled(View)`
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  height: 350px;
  width: 300px;
`;

export const ModalHeaderContainer = styled(View)`
  padding: 5px 16px;
  border-bottom-color: ${({ theme: { colors } }) => colors.mediumGray};
  border-bottom-width: 1px;
  margin-bottom: 10px;
`;

export const ModalHeaderTitle = styled(Text)`
  color: ${({ theme: { colors } }) => colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.largest};
  font-weight: bold;
`;
