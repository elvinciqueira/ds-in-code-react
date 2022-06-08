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
      name: 'a',
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

    if (isEnterKey || isSpaceKey) {
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
            data-testid="radio-label"
            htmlFor={item.name}
            aria-checked={isChecked}
            onKeyUp={(event) => _handleKeyUp(event, index, item.disabled)}
            isDisabled={item.disabled}
          >
            <InputRadioButton
              type="radio"
              id={item.name}
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
