import styled from 'styled-components';
import PropTypes from 'prop-types';
import { typographyVariants } from '../../../theme/tokens/typographyVariants';

export const Typography = ({ variant = 'headingDisplay', tag, children }) => (
  <TypographyBase as={tag} variant={variant}>
    {children}
  </TypographyBase>
);

const TypographyBase = styled.span(({ variant }) => ({
  ...typographyVariants[variant],
}));

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  variant: PropTypes.oneOf([
    'headingDisplay',
    'headingXl',
    'headingLg',
    'headingMd',
    'headingSm',
    'headingXs',
    'paragraphy',
    'caption',
  ]),
};
