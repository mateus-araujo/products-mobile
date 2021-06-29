import React from 'react';
import { TextInputProps } from 'react-native';

import {
  ErrorIcon,
  ErrorMessageContainer,
  ErrorText,
  InputContainer,
  InputLabel,
  StyledInput,
} from './CustomInput.styles';

interface Props {
  errorMessage?: string | null;
  inputProps: TextInputProps;
  label: string;
  whiteBackground?: boolean;
}

export default function CustomInput({
  errorMessage,
  inputProps,
  label,
  whiteBackground,
}: Props) {
  return (
    <InputContainer>
      <InputLabel whiteBackground={whiteBackground || false}>
        {label}
      </InputLabel>

      <StyledInput {...inputProps} />

      <ErrorMessageContainer />
      {errorMessage && (
        <ErrorMessageContainer>
          <ErrorIcon />
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorMessageContainer>
      )}
    </InputContainer>
  );
}
