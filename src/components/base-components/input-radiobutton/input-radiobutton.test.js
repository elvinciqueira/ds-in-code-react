import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import { RadioButton } from './input-radiobutton';

describe('<RadioButton />', () => {
  const defaultProps = {
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

  describe('with disabled', () => {
    test('radio is disabled', () => {
      render(<RadioButton {...defaultProps} />);
      expect(screen.getByLabelText(/label c/i)).toBeDisabled();
    });
  });

  describe('with keyboard', () => {
    describe('when enter key is pressed', () => {
      test('then calls onChange', () => {
        const mockOnChange = jest.fn();
        const expectedValue = {
          label: 'Label A',
          value: 'A',
          checked: true,
          disabled: false,
        };
        render(<RadioButton {...defaultProps} onChange={mockOnChange} />);

        userEvent.tab();
        userEvent.keyboard('{enter}');

        expect.assertions(2);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expectedValue);
      });

      test('then changes checked state', () => {
        const labels = [
          {
            label: 'Label A',
            value: 'A',
            checked: false,
            disabled: false,
          },
        ];
        render(<RadioButton listData={labels} />);

        userEvent.tab();
        userEvent.keyboard('{enter}');

        expect(screen.getByLabelText(/label a/i)).toBeChecked();
      });
    });

    describe('when space key is pressed', () => {
      test('then calls onChange', () => {
        const mockOnChange = jest.fn();
        const expectedValue = {
          label: 'Label A',
          value: 'A',
          checked: true,
          disabled: false,
        };
        render(<RadioButton {...defaultProps} onChange={mockOnChange} />);

        userEvent.tab();
        userEvent.keyboard('{space}');

        expect.assertions(2);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expectedValue);
      });

      test('then changes checked state', () => {
        const labels = [
          {
            label: 'Label A',
            value: 'A',
            checked: false,
            disabled: false,
          },
        ];
        render(<RadioButton listData={labels} />);

        userEvent.tab();
        userEvent.keyboard('{space}');

        expect(screen.getByLabelText(/label a/i)).toBeChecked();
      });
    });
  });

  describe('when checked', () => {
    test('then calls onChange', () => {
      const mockOnChange = jest.fn();
      const expectedValue = {
        label: 'Label B',
        value: 'B',
        checked: false,
        disabled: false,
      };
      render(<RadioButton {...defaultProps} onChange={mockOnChange} />);

      userEvent.click(screen.getByLabelText(/label b/i));

      expect.assertions(2);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(expectedValue);
    });

    test('then changes aria-checked', () => {
      render(<RadioButton {...defaultProps} />);
      const [labelA, labelB] = screen.getAllByTestId('radio-label');

      expect.assertions(4);

      expect(labelA).toHaveAttribute('aria-checked', 'true');
      expect(labelB).toHaveAttribute('aria-checked', 'false');

      userEvent.click(labelB);

      expect(labelA).toHaveAttribute('aria-checked', 'false');
      expect(labelB).toHaveAttribute('aria-checked', 'true');
    });

    test('then changes checked state', () => {
      render(<RadioButton {...defaultProps} />);
      const labelA = screen.getByLabelText(/label a/i);
      const labelB = screen.getByLabelText(/label b/i);

      expect.assertions(4);

      expect(labelA).toBeChecked();
      expect(labelB).not.toBeChecked();

      userEvent.click(labelB);

      expect(labelA).not.toBeChecked();
      expect(labelB).toBeChecked();
    });
  });

  describe('with checked', () => {
    test('aria-checked sets to true', () => {
      render(<RadioButton {...defaultProps} />);

      const [labelA] = screen.getAllByTestId('radio-label');

      expect(labelA).toHaveAttribute('aria-checked', 'true');
    });

    test('radio is checked', () => {
      render(<RadioButton {...defaultProps} />);
      expect(screen.getByLabelText(/label a/i)).toBeChecked();
    });
  });
});
