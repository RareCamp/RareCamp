import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('shows the text in Card', () => {
    render(
      <Card title="Test" description="" icon="+" className="" />,
    );
    const card = screen.getByRole('heading');
    expect(card).toHaveTextContent('Test');
    expect(card).toHaveClass('font-medium');
  });
});
