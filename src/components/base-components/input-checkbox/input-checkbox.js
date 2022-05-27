import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, InputCheckbox } from './styles';

export const Checkbox = ({
  name,
  checked = false,
  isDisabled = false,
  label = '',
  onChange = () => {},
}) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const _handleChange = () => {
    setChecked(!isChecked);
    onChange(!isChecked);
  };

  const _handleKeyUp = (e) => {
    const isEnterKey = e.code === 'Enter';
    const isSpaceKey = e.code === 'Space';

    if (isEnterKey || isSpaceKey) {
      setChecked(!isChecked);
      onChange(!isChecked);
    }
  };

  return (
    <Box
      htmlFor={name}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex="0"
      onKeyUp={_handleKeyUp}
      isDisabled={isDisabled}
    >
      <InputCheckbox
        id={name}
        name={name}
        type="checkbox"
        checked={isChecked}
        value={label}
        disabled={isDisabled}
        onChange={_handleChange}
        tabIndex={-1}
      />
      {label}
    </Box>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
