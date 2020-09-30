import {Container, ErrorInfoBox, Label, StyledInput} from './styled';
import React from 'react';

export type InputProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeValue?: (newValue: string) => void;
  isError?: boolean;
  errorText?: string | false;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChangeValue,
  isError,
  errorText,
  ...restInputProps
}) => {
  return (
    <Container>
      {label && (
        <Label htmlFor={id} isError={isError}>
          {label}
        </Label>
      )}
      <StyledInput
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={event => onChangeValue && onChangeValue(event.target.value)}
        {...restInputProps}
      />
      {isError && errorText && <ErrorInfoBox>{errorText}</ErrorInfoBox>}
    </Container>
  );
};

export default Input;
