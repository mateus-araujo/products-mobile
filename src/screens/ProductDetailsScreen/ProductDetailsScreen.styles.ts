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
  color: ${({ theme: { title, colors } }) =>
    title === 'dark' ? colors.lightGray : colors.darkGray};
`;

export const DetailsItemDescription = styled(Text)`
  color: ${({ theme: { title, colors } }) =>
    title === 'dark' ? colors.white : colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const HistoryHeaderContainer = styled(View)`
  padding: 10px 16px;
  border-bottom-color: ${({ theme: { title, colors } }) =>
    title === 'dark' ? colors.white : colors.mediumGray};
  border-bottom-width: 1px;
  margin-bottom: 16px;
`;

export const HistoryHeaderTitle = styled(Text)`
  color: ${({ theme: { title, colors } }) =>
    title === 'dark' ? colors.white : colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.largest};
  font-weight: bold;
`;
