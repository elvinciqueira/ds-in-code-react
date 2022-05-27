import styled, { css } from 'styled-components';

export const Box = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  user-select: none;
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightRegular};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  color: ${({ theme }) => theme.colors.neutralElements03};

  &:focus:not(:focus-visible) {
    outline: transparent;
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.borders.borderWidthHairline} solid
      ${({ theme }) => theme.colors.contrastColorFocus};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.neutralElements01};
    `}
`;

export const InputCheckbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-style: solid;
  border-radius: ${({ theme }) => theme.borders.borderRadiusNone};
  border-width: ${({ theme }) => theme.borders.borderWidthThin};
  border-color: ${({ theme }) => theme.colors.neutralElements03};
  margin: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin-right: ${({ theme }) => theme.space.spacingSizeNano};

  &::before {
    position: absolute;
    display: block;
    border-color: ${({ theme }) => theme.colors.contrastColorBrand};
    border-style: solid;
    border-width: 0 1px 1px 0;
    height: 12px;
    width: 5px;
    left: 3px;
    top: -2px;
    opacity: 0;
    transform: rotate(45deg);
    z-index: 3;
    content: '';
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralSurface02};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.neutralElements01};
    color: ${({ theme }) => theme.colors.neutralElements01};
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.brandColorPure};
    background: ${({ theme }) => theme.colors.brandColorPure};
    color: #fff;

    &::before {
      opacity: 1;
    }
  }
`;
