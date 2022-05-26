import { ButtonBase } from './styles';
import PropTypes from 'prop-types';

export const Button = ({
  text,
  isLoading = false,
  isDisabled = false,
  onClick = () => {},
}) => (
  <ButtonBase
    disabled={isDisabled}
    isLoading={isLoading}
    aria-disabled={isDisabled}
    aria-label={isLoading ? 'Loading' : undefined}
    onClick={onClick}
  >
    {text}
  </ButtonBase>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
