import { View, Text, TextInput } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import styled from 'styled-components';

export const InputContainer = styled(View)`
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

export const InputLabel = styled(Text)<{ whiteBackground: boolean }>`
  color: ${({ theme: { colors, title }, whiteBackground }) =>
    title === 'dark' && !whiteBackground ? colors.white : colors.black};
  font-size: ${({ theme }) => theme.font.sizes.regular};
  margin-bottom: 5px;
`;

export const StyledInput = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 6px;
  padding-right: 0;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const ErrorMessageContainer = styled(View)`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.small};
  align-items: center;
  flex-direction: row;
`;

export const ErrorIcon = styled(FontAwesome5).attrs({
  name: 'times-circle',
})`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const ErrorText = styled(Text)`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 11px;
`;
