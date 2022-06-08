import { useState } from 'react';
import PropTypes from 'prop-types';

import { InputRadioButton, RadioButtonLabel, RadioGroup } from './styles';

export const RadioButton = ({
  name = '',
  listData = [
    {
      label: 'Label A',
      value: 'A',
      checked: false,
      disabled: false,
    },
  ],
  onChange,
}) => {
  const findChecked = () => listData.findIndex((el) => el.checked);

  const [checkedOpt, setCheckedOpt] = useState(findChecked);

  const _handleChange = (index, disabled) => {
    if (disabled) return;

    setCheckedOpt(index);
    if (onChange) onChange(listData[index]);
  };

  const _handleKeyUp = (event, index, disabled) => {
    const isSpaceKey = event.code === 'Space';
    const isEnterKey = event.code === 'Enter';

    if (isSpaceKey || isEnterKey) {
      if (disabled) return;

      setCheckedOpt(index);
      if (onChange) onChange(listData[index]);
    }
  };

  return (
    <RadioGroup role="radiogroup">
      {listData.map((item, index) => {
        const isChecked = checkedOpt === index;

        return (
          <RadioButtonLabel
            key={index}
            htmlFor={name}
            aria-checked={isChecked}
            onClick={() => _handleChange(index, item.disabled)}
            onKeyUp={(event) => _handleKeyUp(event, index, item.disabled)}
            isDisabled={item.disabled}
          >
            <InputRadioButton
              type="radio"
              id={name}
              name={name}
              checked={isChecked}
              disabled={item.disabled}
              value={item.value}
              onChange={() => _handleChange(index, item.disabled)}
            />
            {item.label}
          </RadioButtonLabel>
        );
      })}
    </RadioGroup>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string,
  listData: PropTypes.array,
  onChange: PropTypes.func,
};
