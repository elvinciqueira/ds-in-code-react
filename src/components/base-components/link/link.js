import PropTypes from 'prop-types';
import { Anchor } from './link.styles';

export const Link = ({
  href,
  target = '_blank',
  isDisabled,
  onClick,
  label,
}) => {
  const _handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Anchor
      href={href}
      target={target}
      isDisabled={isDisabled}
      onClick={_handleClick}
    >
      {label}
    </Anchor>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.node.isRequired,
};
