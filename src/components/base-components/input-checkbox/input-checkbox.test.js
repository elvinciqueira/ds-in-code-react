import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import { Checkbox } from './input-checkbox';

describe('<Checkbox />', () => {
  const defaultProps = {
    name: 'test-checkbox',
    label: 'Checkbox',
  };

  test('when clicked then toggle checked state', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByLabelText(/checkbox/i);
    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test('when enter key is pressed then toggle checked state', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByLabelText(/checkbox/i);
    expect(checkbox).not.toBeChecked();

    userEvent.tab();
    expect(screen.getByText(/checkbox/i)).toHaveFocus();

    userEvent.keyboard('{enter}');
    expect(checkbox).toBeChecked();
  });

  test('when space key is pressed then toggle checked state', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByLabelText(/checkbox/i);
    expect(checkbox).not.toBeChecked();

    userEvent.tab();
    expect(screen.getByText(/checkbox/i)).toHaveFocus();

    userEvent.keyboard('{space}');
    expect(checkbox).toBeChecked();
  });

  test('with default checked then aria-checked is true', () => {
    const whenCheckedProps = {
      ...defaultProps,
      checked: true,
    };
    render(<Checkbox {...whenCheckedProps} />);

    expect(screen.getByText(/checkbox/i)).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });

  test('when is not checked then aria-checked is false', () => {
    const whenNotCheckedProps = {
      ...defaultProps,
      checked: false,
    };
    render(<Checkbox {...whenNotCheckedProps} />);

    expect(screen.getByText(/checkbox/i)).toHaveAttribute(
      'aria-checked',
      'false'
    );
  });

  test('when is disabled then aria-disabled is true', () => {
    const whenDisabledProps = {
      ...defaultProps,
      isDisabled: true,
    };

    render(<Checkbox {...whenDisabledProps} />);

    expect(screen.getByText(/checkbox/i)).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(screen.getByLabelText(/checkbox/i)).toBeDisabled();
  });

  test('when is not disabled then aria-disabled is false', () => {
    render(<Checkbox {...defaultProps} />);

    expect(screen.getByText(/checkbox/i)).toHaveAttribute(
      'aria-disabled',
      'false'
    );
    expect(screen.getByLabelText(/checkbox/i)).not.toBeDisabled();
  });

  test('when changed then calls onChange passing its checked event', () => {
    const mockOnChange = jest.fn();
    const whenOnChangeProps = {
      ...defaultProps,
      onChange: mockOnChange,
    };
    render(<Checkbox {...whenOnChangeProps} />);
    const expectedEvent = {
      checked: true,
    };

    userEvent.click(screen.getByLabelText(/checkbox/i));

    expect(mockOnChange).toHaveBeenCalledWith(expectedEvent);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
