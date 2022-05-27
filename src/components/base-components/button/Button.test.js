import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import { Button } from './Button';

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

  test('when enabled then aria-disable attribute its false', () => {
    renderComponent();
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-disabled',
      'false'
    );
    expect(screen.getByRole('button')).toBeEnabled();
  });

  test('when disabled then aria-disable attribute its true', () => {
    renderComponent({ isDisabled: true });
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByRole('button')).toBeDisabled();
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
