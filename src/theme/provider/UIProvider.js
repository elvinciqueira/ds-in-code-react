import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

export const UIProvider = ({ children, theme }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);
