import { Input } from '../input-base';

export const Textarea = ({
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
    id={name}
    name={name}
    type={'text'}
    tag={'textarea'}
    rows={10}
    cols={50}
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

Textarea.propTypes = {
  ...Input.propTypes,
};
