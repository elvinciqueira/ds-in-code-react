import { css } from 'styled-components';
import { breakpoints } from '../tokens/globals';

export const breakpointsMedia = (cssByBreakpoint) => {
  return Object.keys(cssByBreakpoint)
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      (breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `
    );
};
