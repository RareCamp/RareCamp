import { render, screen } from '@testing-library/react';
import IndexPage from 'pages/index';

describe('IndexPage', () => {
  test('shows the invite header and table', () => {
    render(<IndexPage />);
    const invite = screen.getByRole('button', {
      name: /invite/i,
    });
    expect(invite).toBeInTheDocument();
    const tableRec = screen.getByRole('heading', {
      name: /planning/i,
    });
    expect(tableRec).toBeInTheDocument();
  });
});
