import styled, { css } from 'styled-components';

export const RadioGroup = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
`;

export const RadioButtonLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.neutralElements03};
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeights.fontweightRegular};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  margin-top: ${({ theme }) => theme.space.spacingSizeNano};

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
      pointer-events: none;
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.neutralElements01};
    `}
`;

export const InputRadioButton = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-color: transparent;
  margin: 0;
  top: -2px;
  z-index: 2;
  border-width: ${({ theme }) => theme.borders.borderWidthThin};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutralElements03};
  border-radius: ${({ theme }) => theme.radii.borderRadiusCircular};
  margin-right: ${({ theme }) => theme.space.spacingSizeNano};

  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.contrastColorFocus};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralSurface02};
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.neutralElements01};
  }

  &:checked {
    border-width: 5px;
    border-color: ${({ theme }) => theme.colors.brandColorPure};
  }
`;
