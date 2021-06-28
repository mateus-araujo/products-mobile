import { View } from 'react-native';

import styled from 'styled-components';

export const ModalBackground = styled(View)`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #00000040;
`;

export const ActivityIndicatorContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
