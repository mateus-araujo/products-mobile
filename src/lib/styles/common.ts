import { View } from 'react-native';

import styled from 'styled-components';

export const ScreenContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const Separator = styled(View)`
  margin-bottom: 10px;
`;
