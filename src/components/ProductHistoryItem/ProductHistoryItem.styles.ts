import { Text } from 'react-native';

import styled from 'styled-components';

export const ProductHistoryItemTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
`;

export const ProductHistoryItemSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const ProductHistoryItemPrice = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;
