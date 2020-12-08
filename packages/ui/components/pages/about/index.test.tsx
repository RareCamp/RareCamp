import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProfilePic } from './index';

describe('ProfilePic', () => {
  test('shows the title', () => {
    render(<ProfilePic />);
    const btn = screen.getByRole('button', { name: /click/i });
    expect(btn).toHaveTextContent('click');
    const a = screen.getByRole('heading', { name: /coins/i });
    expect(a).toBeInTheDocument();
    userEvent.click(btn);
    expect(a).toHaveTextContent('1');
  });
});
