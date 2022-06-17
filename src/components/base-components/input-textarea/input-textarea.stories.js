import { Textarea } from './input-textarea';

export default {
  title: 'Core components react/Textarea',
  component: Textarea,
};

export function Default(args) {
  return <Textarea {...args} />;
}

Default.args = {
  label: 'Label',
  name: 'default',
  placeholder: 'Input Default',
  helperText: 'Helper text',
};
