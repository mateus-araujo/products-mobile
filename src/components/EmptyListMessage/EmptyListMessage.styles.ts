import { Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styled from 'styled-components';

export const EmptyMessageContainer = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-top: 100px;
`;

export const EmptyIcon = styled(MaterialCommunityIcons).attrs({
  size: 50,
})`
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: 20px;
`;

export const EmptyText = styled(Text)`
  color: ${({ theme }) => theme.colors.mediumGray};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.sizes.regular};
`;
