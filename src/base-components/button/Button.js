import { ButtonBase } from './styles';
import PropTypes from 'prop-types';

export const Button = ({
  label,
  isLoading = false,
  isDisabled = false,
  type = 'button',
  onClick = () => {},
}) => (
  <ButtonBase
    type={type}
    disabled={isDisabled}
    isLoading={isLoading}
    aria-disabled={isDisabled}
    aria-label={isLoading ? 'Loading' : undefined}
    onClick={onClick}
  >
    {label}
  </ButtonBase>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
