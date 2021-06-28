import React from 'react';
import { CurrencyInputProps } from 'react-native-currency-input';

import {
  ErrorIcon,
  ErrorMessageContainer,
  ErrorText,
  InputContainer,
  InputLabel,
  StyledInput,
} from './CurrencyInput.styles';

interface Props {
  errorMessage?: string | null;
  inputProps: CurrencyInputProps;
  label: string;
  whiteBackground?: boolean;
}

export default function CurrencyInput({
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

      <StyledInput
        prefix="$"
        delimiter=","
        separator="."
        precision={2}
        {...inputProps}
      />

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
