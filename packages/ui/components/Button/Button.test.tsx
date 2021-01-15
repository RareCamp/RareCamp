import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  // TODO: Separate out the tests that are written together
  test('shows the text and icon with custom class and predefined color/size style', () => {
    render(
      <Button
        label="Add Task"
        size="md"
        color="tertiary"
        icon="+"
        className="random-custom-class"
        onClick={() => {}}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn-tertiary');
    expect(button).toHaveClass('btn-md');
    expect(button).toHaveClass('random-custom-class');
    expect(button).toHaveTextContent('Add Task');
    expect(button).toHaveTextContent('+');
  });
  test('uses custom class instead of predefined size and color', () => {
    render(
      <Button
        label="Add Task"
        size="custom"
        color="custom"
        icon="+"
        className="random-custom-class"
        onClick={() => {}}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('btn-primary');
    expect(button).not.toHaveClass('btn-secondary');
    expect(button).not.toHaveClass('btn-tertiary');
    expect(button).not.toHaveClass('btn-md');
    expect(button).toHaveClass('random-custom-class');
  });
});
