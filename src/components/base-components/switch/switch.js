import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Slider, SwitchContainer, SwitchSelector, SwitchLabel } from './styles';

export const Switch = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const [checkedIpt, setCheckedIpt] = useState(checked);

  useEffect(() => {
    setCheckedIpt(checked);
  }, [checked]);

  const _handleSwitch = () => {
    if (typeof onChange === 'function') {
      onChange(!checkedIpt);
    }
    setCheckedIpt(!checkedIpt);
  };

  const _handleKeyUp = (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      if (typeof onChange === 'function') {
        onChange(!checkedIpt);
      }
      setCheckedIpt(!checkedIpt);
    }
  };

  return (
    <SwitchContainer
      checked={checkedIpt}
      disabled={disabled}
      tabIndex={0}
      onKeyUp={_handleKeyUp}
    >
      <SwitchSelector
        role="switch"
        type="checkbox"
        checked={checkedIpt}
        disabled={disabled}
        onChange={_handleSwitch}
      />
      <Slider checked={checkedIpt} disabled={disabled} />
      <SwitchLabel disabled={disabled}>{label}</SwitchLabel>
    </SwitchContainer>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
