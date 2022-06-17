import { Link } from './link';

export default {
  title: 'Core components react/Link',
  component: Link,
};

export function Default(args) {
  return <Link {...args} />;
}

Default.args = {
  label: 'Link text',
  href: 'https://www.google.com',
};
