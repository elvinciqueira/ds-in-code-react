import { InputText } from './input-text';

export default {
  title: 'Core components react/InputText',
  component: InputText,
};

export function Default(args) {
  return <InputText {...args} />;
}

Default.args = {
  label: 'Label',
  name: 'default',
  placeholder: 'Input Default',
  helperText: 'Helper text',
};
