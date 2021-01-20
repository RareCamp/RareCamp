import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  test('shows the children rendered under modal', () => {
    render(
      <Modal name="add-circled" className="w-20">
        <h1>Modal</h1>
      </Modal>,
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toHaveTextContent('Modal');
  });
});
