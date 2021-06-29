import { Text, View } from 'react-native';

import styled from 'styled-components';

export const ProductItemContent = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ProductItemTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
`;

export const ProductItemSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const ProductItemPrice = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;
