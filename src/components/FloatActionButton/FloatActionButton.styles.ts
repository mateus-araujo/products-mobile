import { TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import styled from 'styled-components';

export const FloatActionButtonContainer = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 15px;
  bottom: 30px;
  border-radius: 25px;
  elevation: 10;
  align-items: center;
  justify-content: center;
`;

export const FloatActionButtonIcon = styled(FontAwesome5).attrs({
  name: 'plus',
})`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`;
