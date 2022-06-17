import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 272px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      outline: ${({ theme }) => theme.borders.borderWidthHairline} solid
        ${({ theme }) => theme.colors.contrastColorFocus};
    `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutralElements03};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXxs};
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightBold};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  margin-bottom: ${({ theme }) => theme.space.spacingSizeQuarck};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${({ theme }) => theme.colors.neutralElements01};
    `}
`;

export const HelperText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightRegular};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
`;

export const HelperTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0;

  ${({ error }) =>
    error &&
    css`
      opacity: 1;
    `};
`;

export const InputBase = styled.input`
  color: ${({ theme }) => theme.colors.neutralElements02};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXs};
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightRegular};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  outline: transparent;
  box-sizing: border-box;
  background-color: transparent;
  padding: ${({ theme }) => theme.space.spacingSizeXxxs};
  margin-bottom: ${({ theme }) => theme.space.spacingSizeNano};
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.borderRadiusSm};
  border: ${({ theme }) =>
    `${theme.borders.borderWidthThin} solid ${theme.colors.neutralElements03}`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralSurface02};
  }

  &:disabled {
    pointer-events: none;
    border-color: ${({ theme }) => theme.colors.neutralElements01};
    background-color: ${({ theme }) => theme.colors.neutralSurface02};
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.feedbackColorWarningPure};
      background-color: ${({ theme }) => theme.colors.feedbackColorWarning01};

      &:hover {
        background-color: ${({ theme }) => theme.colors.feedbackColorWarning01};
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.neutralElements03};
        opacity: 1;
      }
    `};

  ${({ value }) =>
    value &&
    css`
      color: ${({ theme }) => theme.colors.neutralElements03};
    `};
`;
