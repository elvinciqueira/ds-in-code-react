import { Button } from './Button';

export default {
  title: 'Core components react/Button',
  component: Button,
};

export function Default(args) {
  return <Button {...args} />;
}

Button.args = {
  label: 'Label',
  // size: 'large',
  isDisabled: false,
  isLoading: false,
};
