import { Switch } from './switch';

export default {
  title: 'Core components react/Switch',
  component: Switch,
};

export const Default = Switch.bind({});
Default.args = {
  label: 'Switch',
  disabled: false,
  checked: false,
};
