import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import { Button } from './button';

describe('<Button />', () => {
  const defaultProps = {
    label: 'Button',
    type: 'button',
  };

  const renderComponent = (props = {}) => {
    return render(<Button {...defaultProps} {...props} />);
  };

  test('when type is provided then render a button with the provided type', () => {
    renderComponent({ type: 'submit' });
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  describe('when enabled', () => {
    test('then aria-disable attribute its false', () => {
      renderComponent();
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-disabled',
        'false'
      );
    });

    test('button is enabled', () => {
      renderComponent();
      expect(screen.getByRole('button')).toBeEnabled();
    });
  });

  describe('when disabled', () => {
    test('then aria-disable attribute its true', () => {
      renderComponent({ isDisabled: true });
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-disabled',
        'true'
      );
    });

    test('button is disabled', () => {
      renderComponent({ isDisabled: true });
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  test('when loading then aria-label sets to Loading', () => {
    renderComponent({ isLoading: true });
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Loading');
  });

  describe('when clicked', () => {
    describe('and enabled', () => {
      test('then calls onClick', () => {
        const mockOnClickAction = jest.fn();
        renderComponent({ onClick: mockOnClickAction });

        userEvent.click(screen.getByRole('button'));

        expect(mockOnClickAction).toHaveBeenCalledTimes(1);
      });
    });

    describe('and disabled', () => {
      test('then does not calls onClick', () => {
        const mockOnClickAction = jest.fn();
        renderComponent({ isDisabled: true, onClick: mockOnClickAction });

        userEvent.click(screen.getByRole('button'));

        expect(mockOnClickAction).not.toHaveBeenCalled();
      });
    });
  });
});
