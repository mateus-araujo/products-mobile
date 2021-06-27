import { View, Text } from 'react-native';

import styled from 'styled-components';

export const DetailsContainer = styled(View)`
  padding: 16px;
  flex-wrap: wrap;
`;

export const DetailsItemContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const DetailsItemTitle = styled(Text)`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
  margin-right: 5px;
`;

export const DetailsItemDescription = styled(Text)`
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const HistoryHeaderContainer = styled(View)`
  padding: 10px 16px;
  border-bottom-color: ${({ theme }) => theme.colors.mediumGray};
  border-bottom-width: 1px;
  margin-bottom: 16px;
`;

export const HistoryHeaderTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.largest};
  font-weight: bold;
`;
