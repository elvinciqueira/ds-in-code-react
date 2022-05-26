import styled, { css } from 'styled-components';

export const ButtonBase = styled.button`
  background-color: ${({ theme }) => theme.colors.brandColorPure};
  cursor: pointer;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.borderRadiusSm};
  color: ${({ theme }) => theme.colors.contrastColorBrand};
  margin: ${({ theme }) => theme.space.spacingSizeXxs};
  padding: 0 ${({ theme }) => theme.space.spacingSizeXxs};
  height: 48px;
  min-width: 160px;
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightBold};
  transition: all 0.3s ease-in-out;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.highlightColorPure};
    outline-width: ${({ theme }) => theme.borders.borderWidthThin};
  }

  ${({ isLoading }) => (isLoading ? loadingStyle : withoutLoadingStyle)};
`;

const loadingStyle = css`
  color: transparent;
  position: relative;
  cursor: initial;

  &::after {
    background: white;
    content: '';
    height: 2px;
    width: 10px;
    left: 50%;
    display: block;
    margin: auto;
    position: absolute;
    top: calc(50% - 1px);
    animation: loading 1s linear infinite;
  }
`;

const withoutLoadingStyle = css`
  &:hover {
    color: ${({ theme }) => theme.colors.brandColor02};
    background-color: ${({ theme }) => theme.colors.brandColor01};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.neutralElements01};
    background-color: ${({ theme }) => theme.colors.neutralSurface02};
    cursor: not-allowed;
  }
`;
