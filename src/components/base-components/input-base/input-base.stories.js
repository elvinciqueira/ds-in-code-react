import { Input } from './input-base';

export default {
  title: 'Core components react/Input',
  component: Input,
};

export function Default(args) {
  return <Input {...args} />;
}

Default.args = {
  label: 'Label',
  name: 'default',
  placeholder: 'Input Default',
  helperText: 'Helper text',
};
