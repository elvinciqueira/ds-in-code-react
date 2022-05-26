import { UIProvider } from '../src/theme/provider/UIProvider';
import { globals } from '../src/theme/tokens/globals';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Themes',
    description: 'Temas',
    defaultValue: 'theme1',
    right: true,
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'theme1', title: 'Marca A', right: 'Theme 1' },
        { value: 'theme2', title: 'Marca A', right: 'Theme 2' },
      ],
      showName: true,
    },
  },
  mode: {
    name: 'Mode',
    description: 'Mode',
    defaultValue: 'light',
    right: true,
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    let style = '';
    if (context.args.bgColor) {
      style = `.sb-show-main{ background: #292929 !important;}`;
    }

    const theme = {
      ...globals,
      colors: {
        ...globals.colors[context?.globals?.theme][context?.globals?.mode],
      },
    };

    if (context.globals.mode == 'dark') {
      style = `.sb-show-main{ background: #292929 !important;}`;
    }

    return (
      <UIProvider theme={theme}>
        <style>{style}</style>
        <Story />
      </UIProvider>
    );
  },
];
