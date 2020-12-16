import { render, screen } from '@testing-library/react';
import { AppLayout } from './index';

describe('AppLayout#Navbar', () => {
  test('shows the username and notifications', () => {
    render(<AppLayout> </AppLayout>);
    const username = screen.getByText('Ramya');
    expect(username).toBeInTheDocument();
  });
});

describe('AppLayout#Sidebar', () => {
  test('shows the links', () => {
    render(<AppLayout> </AppLayout>);
    const dashboard = screen.getByRole('menuitem', {
      name: /dashboard/i,
    });
    const diseaseProfile = screen.getByRole('menuitem', {
      name: /disease profile/i,
    });
    expect(dashboard).toBeInTheDocument();
    expect(diseaseProfile).toBeInTheDocument();
  });
});

describe('AppLayout', () => {
  test('displays the children passed', () => {
    render(
      <AppLayout>
        <h3>Hello</h3>
      </AppLayout>,
    );
    const text = screen.getByRole('heading', {
      name: /hello/i,
    });
    expect(text).toBeInTheDocument();
  });
});
