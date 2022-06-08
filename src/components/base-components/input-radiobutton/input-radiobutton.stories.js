import { RadioButton } from './input-radiobutton';

export default {
  title: 'Core components react/InputRadioButton',
  component: RadioButton,
};

export const Default = RadioButton.bind({});
Default.args = {
  listData: [
    {
      label: 'Label A',
      value: 'A',
      checked: true,
      disabled: false,
    },
    {
      label: 'Label B',
      value: 'B',
      checked: false,
      disabled: false,
    },
    {
      label: 'Label C',
      value: 'C',
      checked: false,
      disabled: true,
    },
  ],
};
