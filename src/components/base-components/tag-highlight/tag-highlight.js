import PropTypes from 'prop-types';
import { Tag } from './styles';

export const TagHighlight = ({ label = 'Tag HighLight', tabIndex, role }) => (
  <Tag tabIndex={tabIndex} role={role}>
    {label}
  </Tag>
);

TagHighlight.propTypes = {
  label: PropTypes.string,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
};
