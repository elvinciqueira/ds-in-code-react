import { Checkbox } from './input-checkbox';

export default {
  title: 'Core components react/InputCheckbox',
  component: Checkbox,
};

export const Default = Checkbox.bind({});
Default.args = {
  name: 'checkbox',
  label: 'Checkbox',
  checked: false,
  isDisabled: false,
};
