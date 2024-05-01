import { render, fireEvent } from '@testing-library/react';
import { Form } from './Form';
import { useAppDispatch } from 'path/to/useAppDispatch';
import { handleAdd, handleReset } from 'path/to/actions';

jest.mock('path/to/useAppDispatch');
jest.mock('path/to/actions');

describe('Form', () => {
  beforeEach(() => {
    useAppDispatch.mockReturnValue(jest.fn());
    handleAdd.mockReturnValue(jest.fn());
    handleReset.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should dispatch handleAdd action when ADD button is clicked', () => {
    const { getByLabelText, getByText } = render(<Form />);

    const nameInput = getByLabelText('Name');
    const vacancyInput = getByLabelText('Vacancy');
    const phoneInput = getByLabelText('Phone');
    const addButton = getByText('ADD');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(vacancyInput, { target: { value: 'Software Engineer' } });
    fireEvent.change(phoneInput, { target: { value: '+1 123-456-7890' } });
    fireEvent.click(addButton);

    expect(handleAdd).toHaveBeenCalledWith({
      name: 'John Doe',
      vacancy: 'Software Engineer',
      phone: '+1 123-456-7890',
    });
  });

  test('should dispatch handleReset action when Clear List button is clicked', () => {
    const { getByText } = render(<Form />);

    const clearListButton = getByText('Clear List');

    fireEvent.click(clearListButton);

    expect(handleReset).toHaveBeenCalled();
  });

  test('should open SearchModal when Search button is clicked', () => {
    const { getByText } = render(<Form />);

    const searchButton = getByText('Search');

    fireEvent.click(searchButton);

    expect(getByText('Search Modal')).toBeInTheDocument();
  });
});