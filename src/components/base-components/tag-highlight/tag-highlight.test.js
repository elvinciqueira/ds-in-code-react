import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import { TagHighlight } from './tag-highlight';

describe('<TagHightlight />', () => {
  describe('with role', () => {
    test('semantic meaning content', () => {
      render(<TagHighlight role="button" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('with tabindex', () => {
    test('when tabindex -1 and tab is pressed then do not focus', () => {
      render(<TagHighlight tabIndex={-1} role="button" />);

      userEvent.tab();

      expect(screen.getByRole('button')).not.toHaveFocus();
    });

    test('when tabindex default and tab is pressed then focus on element', () => {
      render(<TagHighlight tabIndex={0} role="button" />);

      userEvent.tab();

      expect(screen.getByRole('button')).toHaveFocus();
    });
  });

  describe('with label', () => {
    test('renders label text node', () => {
      render(<TagHighlight label="Hello World" />);
      expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    });
  });
});
