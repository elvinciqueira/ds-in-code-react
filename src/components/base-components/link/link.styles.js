import styled, { css } from 'styled-components';

export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutralElements03};
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightMedium};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  width: fit-content;
  padding: 0;
  padding-bottom: ${({ theme }) => theme.space.spacingSizeQuarck};
  margin: 0;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  &:focus:not(:focus-visible) {
    outline: transparent;
  }

  &:focus-visible:not(:active) {
    outline: ${({ theme }) => theme.borders.borderWidthHairline} solid
      ${({ theme }) => theme.colors.contrastColorFocus};
    text-decoration: none;

    &::after {
      transition-property: width;
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: ${({ theme }) => theme.borders.borderWidthThin};
    background-color: ${({ theme }) => theme.colors.neutralElements03};
    transition-property: width;
    transition: width 0.3s ease-in-out;
    width: 100%;
  }

  &:hover {
    &::after {
      width: 50%;
    }
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
       {
        color: ${({ theme }) => theme.colors.neutralElements01};
        pointer-events: none;
        cursor: default;

        &::after {
          background-color: ${({ theme }) => theme.colors.neutralElements01};
        }
      }
    `}
`;
