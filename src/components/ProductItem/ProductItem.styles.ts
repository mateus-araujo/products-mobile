import { Text, View } from 'react-native';

import styled from 'styled-components';

export const ProductItemContainer = styled(View)`
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  elevation: 5;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
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
