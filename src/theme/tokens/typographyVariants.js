import { globals } from './globals';

const defaultTextStyles = {
  fontFamily: globals.fontFamily.fontFamily01,
  lineHeight: globals.lineHeights.lineHeightDefault,
  fontSize: globals.fontSizes.fontSizeMd,
  fontWeight: globals.fontWeights.fontweightRegular,
};

export const typographyVariants = {
  headingDisplay: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeGiant,
  },
  headingXl: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeXxxl,
    fontWeight: globals.fontWeights.fontWeightBold,
  },
  headingLg: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeXxl,
  },
  headingMd: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeLg,
  },
  headingSm: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeMd,
  },
  headingXs: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeXs,
  },
  paragraphy: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeXs,
  },
  caption: {
    ...defaultTextStyles,
    fontSize: globals.fontSizes.fontSizeXxs,
  },
};
