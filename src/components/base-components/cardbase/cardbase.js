import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Container = styled.div`
  border-radius: ${({ theme }) => theme.radii.borderRadiusMd};
  padding: ${({ theme }) => theme.space.spacingInsetSizeSmStack};
  background-color: ${({ theme }) => theme.colors.neutralSurface01};
  border-width: ${({ theme }) => theme.borders.borderWidthHairline};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutralSurface02};
  width: 100%;
  min-height: 380px;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.shadowLevel3Stack} rgba(0, 0, 0, ${theme.opacity.opacityLevelSemitransparent})`};
  }
`;

CardBase.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
