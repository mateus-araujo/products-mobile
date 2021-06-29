import { Text, TouchableOpacity } from 'react-native';

import styled from 'styled-components';

export type CustomButtonType = 'default' | 'outline' | 'disabled';

export const CustomButtonContainer = styled(TouchableOpacity)<{
  type: CustomButtonType;
}>`
  margin-bottom: 10px;
  background-color: ${({ theme, type }) =>
    type === 'disabled'
      ? theme.colors.gray
      : type === 'outline'
      ? 'transparent'
      : theme.colors.primary};
  padding: 7px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid
    ${({ theme, type }) =>
      type === 'disabled'
        ? theme.colors.gray
        : type === 'outline'
        ? theme.colors.primary
        : type === 'default'
        ? theme.colors.primary
        : 'transparent'};
`;

export const CustomButtonText = styled(Text)<{ type: string }>`
  text-align: center;
  font-weight: bold;
  color: ${({ theme, type }) =>
    type === 'outline' ? theme.colors.primary : theme.colors.white};
  font-size: 16px;
`;
