import { Input } from '../input-base';

export const InputText = ({
  name,
  label,
  error = false,
  placeholder,
  maxLength = 50,
  onChange,
  onBlur,
  helperText,
  isDisabled = false,
}) => (
  <Input
    type={'text'}
    id={name}
    name={name}
    label={label}
    error={error}
    helperText={helperText}
    placeholder={placeholder}
    maxLength={maxLength}
    disabled={isDisabled}
    onChange={onChange}
    onBlur={onBlur}
  />
);

InputText.propTypes = {
  ...Input.propTypes,
};
