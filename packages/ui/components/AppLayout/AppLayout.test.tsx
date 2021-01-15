import { render, screen } from '@testing-library/react';
import AppLayout from './AppLayout';

describe('AppLayout', () => {
  test('renders Applayout component', () => {
    render(
      <AppLayout>
        <>Hii</>
      </AppLayout>,
    );

    expect(screen.getByTestId('121')).toHaveClass('w-full');
  });
});
