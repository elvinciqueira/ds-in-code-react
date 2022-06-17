import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { HelperText, HelperTextBox, InputBase, Label, Wrapper } from './styles';

export const InputText = ({
  type = 'text',
  name,
  label,
  error = false,
  placeholder,
  maxLength = 50,
  onChange,
  onBlur,
  helperText,
  isDisabled = false,
}) => {
  const inputRef = useRef(null);
  const [_error, setError] = useState(error);
  const [_value, setValue] = useState('');
  const [_keyboardFocus, setKeyboardFocus] = useState(false);

  useEffect(() => {
    setError(error);
  }, [error]);

  const _handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    if (onChange) onChange(value);
  };

  const _handleBlur = (e) => {
    setKeyboardFocus(false);
    if (onBlur) onBlur(e);
  };

  const _handleKeyBoardEvents = (e) => {
    if (e.code === 'Tab') {
      setKeyboardFocus(true);
      inputFocus();
    }
  };

  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <Wrapper isFocused={_keyboardFocus} onKeyUp={_handleKeyBoardEvents}>
      <Label htmlFor={name} isDisabled={isDisabled}>
        {label}
      </Label>
      <InputBase
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={_value}
        error={_error}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={isDisabled}
        onChange={_handleChange}
        onBlur={_handleBlur}
      />
      {error && (
        <HelperTextBox aria-hidden={!_error} error={_error}>
          <HelperText>{helperText}</HelperText>
        </HelperTextBox>
      )}
    </Wrapper>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  isDisabled: PropTypes.bool,
};
