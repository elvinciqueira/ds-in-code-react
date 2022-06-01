import { CardBase } from './cardbase';

export default {
  title: 'Core components react/CardBase',
  component: CardBase,
};

export function Default(args) {
  return (
    <div style={{ width: '314px' }}>
      <CardBase {...args} />
    </div>
  );
}

CardBase.args = {};
