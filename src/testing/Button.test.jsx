import { render, fireEvent } from '@testing-library/react';
import Button from "./Button";

test('Увеличение на 1', () => {
    const { getByText } = render(<Button />);
    const button = getByText('+');
    
    fireEvent.click(button); // Нажимаем на кнопку
    expect(button.textContent).toBe('1'); // Проверяем, что значение увеличилось на 1
});
