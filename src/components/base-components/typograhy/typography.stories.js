import { Typography } from './typography';

export default {
  title: 'Core components react/Typography',
  component: Typography,
};

export function Default(args) {
  return <Typography {...args} />;
}

Default.args = {
  children: 'Typography',
};
