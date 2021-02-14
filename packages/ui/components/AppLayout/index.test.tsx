import { render, screen } from '@testing-library/react';
import { AppLayout } from './index';

describe('AppLayout#Sidebar', () => {
  test('shows the links', () => {
    render(<AppLayout> </AppLayout>);
    const workspace = screen.getByRole('button', {
      name: /workspace/i,
    });
    expect(workspace).toBeInTheDocument();
  });
});

describe('AppLayout', () => {
  test('displays the children passed', () => {
    render(
      <AppLayout>
        <h3>Layout</h3>
      </AppLayout>,
    );
    const text = screen.getByRole('heading', {
      name: /Layout/i,
    });
    expect(text).toBeInTheDocument();
  });
});
