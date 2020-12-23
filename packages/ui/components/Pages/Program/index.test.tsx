import { render, screen } from '@testing-library/react';
// import IndexPage from 'pages/index';
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

/*  TODO: write integration test for the index page. Right now the ant design 
    components has lot of listener that needs to be mocked
*/
/* describe('IndexPage', () => {
  fit('shows the disease table', () => {
    render(<IndexPage />);
    const text = screen.getByRole('row', {
      name: /foundation/i,
    });
    expect(text).toBeInTheDocument();
  });
});
 */
