import React from 'react';
import { render } from '@testing-library/react';
import { UIProvider } from '../../theme/provider/UIProvider';
import { createTheme } from '../../theme/createTheme';

const AllTheProviders = ({ children }) => {
  const theme = createTheme();

  return <UIProvider theme={theme}>{children}</UIProvider>;
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
