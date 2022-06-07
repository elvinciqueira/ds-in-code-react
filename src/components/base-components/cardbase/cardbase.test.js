import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import { CardBase } from './cardbase';

describe('<CardBase />', () => {
  const defaultProps = {
    children: 'Howdy',
  };

  test('when tab is pressed then focus on card', () => {
    render(<CardBase {...defaultProps} />);

    userEvent.tab();

    expect(screen.getByTestId('card-base')).toHaveFocus();
  });

  test('when clicked then calls onClick', () => {
    const mockOnClick = jest.fn();
    const withOnClick = {
      ...defaultProps,
      onClick: mockOnClick,
    };
    render(<CardBase {...withOnClick} />);

    userEvent.click(screen.getByTestId('card-base'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
