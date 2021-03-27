import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('NavBar', () => {
  test('renders Navbar component', () => {
    render(
      <Navbar
        username=""
        setEditProgramModalOpen={() => {}}
        setAccountSettingModalOpen={() => {}}
      />,
    );

    expect(screen.getByText(/Invite/));
  });

  test('clicks button in Navbar ', () => {
    render(
      <Navbar
        username=""
        setEditProgramModalOpen={() => {}}
        setAccountSettingModalOpen={() => {}}
      />,
    );
    // expect();
    const liItem = screen.getByTestId('123');
    expect(liItem).toHaveClass('flex');
  });
});
