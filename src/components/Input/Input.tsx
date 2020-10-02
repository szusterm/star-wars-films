import {Container, ErrorInfoBox, Label, StyledInput} from './styled';
import React, {forwardRef} from 'react';

export type InputProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeValue?: (newValue: string) => void;
  isError?: boolean;
  errorText?: string | false;
};

const Input = forwardRef((props: InputProps, ref) => {
  const {
    id,
    label,
    placeholder,
    value,
    onChangeValue,
    isError,
    errorText,
    ...restInputProps
  } = props;

  return (
    <Container>
      {label && (
        <Label htmlFor={id} isError={isError}>
          {label}
        </Label>
      )}
      <StyledInput
        ref={ref as any}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={event => onChangeValue && onChangeValue(event.target.value)}
        {...restInputProps}
      />
      {isError && errorText && <ErrorInfoBox>{errorText}</ErrorInfoBox>}
    </Container>
  );
});

Input.displayName = 'Input';

export default Input;
