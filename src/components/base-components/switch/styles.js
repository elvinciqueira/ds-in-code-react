import styled, { css } from 'styled-components';

export const SwitchLabel = styled.div`
  padding-left: ${({ theme }) => theme.space.spacingSizeSm};
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightRegular};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  color: ${({ theme }) => theme.colors.neutralElements03};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.neutralElements01};
    `}
`;

export const SwitchContainer = styled.label`
  position: relative;
  height: 24px;
  width: 40px;
  cursor: pointer;
  background-color: transparent;
  border-width: ${({ theme }) => theme.borders.borderWidthThin};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutralElements03};
  border-radius: ${({ theme }) => theme.radii.borderRadiusPill};
  position: relative;
  display: inline-flex;
  align-items: center;

  &:focus:not(:focus-visible) {
    outline: transparent;
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.borders.borderWidthHairline} solid
      ${({ theme }) => theme.colors.contrastColorFocus};
  }

  ${({ checked }) =>
    !checked &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.neutralSurface02};
      }
    `}

  ${({ checked }) =>
    checked &&
    css`
      border-color: ${({ theme }) => theme.colors.brandColorPure};
      background-color: ${({ theme }) => theme.colors.brandColorPure};
    `}

${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      border-color: ${({ theme }) => theme.colors.neutralElements01};
    `}
`;

export const SwitchSelector = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: ${({ theme }) => theme.radii.borderRadiusPill};
  position: absolute;
  width: 16px;
  height: 16px;
  top: 4px;
  left: 4px;
  display: inline-block;
  overflow: hidden;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.neutralElements03};
  border-radius: ${({ theme }) => theme.radii.borderRadiusCircular};
  -webkit-transition: 0.4s;
  transition: 0.4s;

  ${({ checked }) =>
    checked &&
    css`
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
      background-color: ${({ theme }) => theme.colors.contrastColorBrand};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.neutralElements01};
    `}
`;
