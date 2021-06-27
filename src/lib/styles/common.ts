import { Pressable, View } from 'react-native';

import styled from 'styled-components';

export const CardItemContainer = styled(Pressable)`
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  elevation: 5;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const ScreenContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const Separator = styled(View)`
  margin-bottom: 10px;
`;
