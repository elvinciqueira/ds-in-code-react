import PropTypes from 'prop-types';
import { Container } from './styles';

export const CardBase = ({ children, onClick }) => {
  const _handleClick = () => {
    if (onClick) onClick(true);
  };

  return (
    <Container tabIndex="0" onClick={_handleClick}>
      {children}
    </Container>
  );
};

CardBase.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
