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
});

describe('NavBar', () => {
  test('checks button  class in Navbar ', () => {
    render(
      <Navbar
        username=""
        setEditProgramModalOpen={() => {}}
        setAccountSettingModalOpen={() => {}}
      />,
    );
    // expect();
    // const clicked = fireEvent.click(screen.getByRole(''));
    // expect(clicked).toHaveBeenCalledTimes(1);

    expect(screen.getByText(/SSMD Gene Therapy/)).toHaveClass(
      'text-2xl',
    );
  });
});
describe('NavBar', () => {
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
