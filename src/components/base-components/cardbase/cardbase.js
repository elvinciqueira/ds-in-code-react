import PropTypes from 'prop-types';
import { Container } from './styles';

export const CardBase = ({ children, onClick }) => (
  <Container data-testid="card-base" tabIndex={0} onClick={onClick}>
    {children}
  </Container>
);

CardBase.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
