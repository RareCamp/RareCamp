import { render, screen } from '@testing-library/react';
import IndexPage from 'pages/index';
import { MainSection } from './index';

describe('IndexPage#MainSection', () => {
  test('shows the children passed', () => {
    render(
      <MainSection>
        <h3>hello</h3>
      </MainSection>,
    );
    const text = screen.getByRole('heading', {
      name: /hello/i,
    });
    expect(text).toBeInTheDocument();
  });
});

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
