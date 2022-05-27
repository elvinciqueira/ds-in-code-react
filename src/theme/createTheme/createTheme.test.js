import { createTheme } from './index';
import { globals } from '../tokens/globals';

describe('createTheme', () => {
  test('when theme is not provided then return the default theme', () => {
    const theme = createTheme();
    const expectedTheme = {
      ...globals,
      colors: {
        ...globals.colors.theme1.light,
      },
    };

    expect(theme).toEqual(expectedTheme);
  });

  test('when mode is provided then return the theme with the mode colors', () => {
    const theme = createTheme('theme1', 'dark');
    const expectedTheme = {
      ...globals,
      colors: {
        ...globals.colors.theme1.dark,
      },
    };

    expect(theme).toEqual(expectedTheme);
  });

  test('when theme is provided then return the theme mode colors', () => {
    const theme = createTheme('theme2');
    const expectedTheme = {
      ...globals,
      colors: {
        ...globals.colors.theme2.light,
      },
    };

    expect(theme).toEqual(expectedTheme);
  });
});
