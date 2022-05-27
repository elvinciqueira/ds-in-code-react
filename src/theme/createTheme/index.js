import { globals } from '../tokens/globals';

export const createTheme = (theme = 'theme1', mode = 'light') => {
  return {
    ...globals,
    colors: {
      ...globals.colors[theme][mode],
    },
  };
};
