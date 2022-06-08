import { Button } from './button';

export default {
  title: 'Core components react/Button',
  component: Button,
};

export function Default(args) {
  return <Button label="Button" {...args} />;
}

Button.args = {
  label: 'Label',
  isDisabled: false,
  isLoading: false,
};
