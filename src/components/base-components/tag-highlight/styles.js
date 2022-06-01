import styled from 'styled-components';

export const Tag = styled.button`
  border: 0;
  color: ${({ theme }) => theme.colors.highlightColor02};
  background-color: ${({ theme }) => theme.colors.highlightColor01};
  font-size: ${({ theme }) => theme.fontSizes.fontSizeXxs};
  font-family: ${({ theme }) => theme.fontFamily.fontFamily01};
  font-weight: ${({ theme }) => theme.fontWeights.fontWeightRegular};
  line-height: ${({ theme }) => theme.lineHeights.lineHeightDefault};
  border-radius: ${({ theme }) => theme.radii.borderRadiusPill};
  padding: ${({ theme }) =>
    `${theme.space.spacingInsetSizeQuarckV} ${theme.space.spacingInsetSizeXsH}`};
`;
