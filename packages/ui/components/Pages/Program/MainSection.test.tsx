import { render, screen } from '@testing-library/react';
import { MainSection } from './index';

describe('IndexPage#MainSection', () => {
  test('shows the children passed', () => {
    render(
      <MainSection
        isAccountSettingModalOpen={false}
        isEditProgramModalOpen={false}
        setAccountSettingModalOpen={() => {}}
        setEditProgramModalOpen={() => {}}
      >
        <h1>Hii</h1>
      </MainSection>,
    );
    const text = screen.getByRole('heading', {
      name: /Hii/i,
    });
    expect(text).toBeInTheDocument();
  });
});
describe('MainSection', () => {
  test('renders MainSection component', () => {
    render(
      <MainSection
        isAccountSettingModalOpen={false}
        isEditProgramModalOpen={false}
        setAccountSettingModalOpen={() => {}}
        setEditProgramModalOpen={() => {}}
      >
        <>Mainsection</>
      </MainSection>,
    );

    expect(screen.getByText(/Mainsection/)).toBeInTheDocument();
  });
});
