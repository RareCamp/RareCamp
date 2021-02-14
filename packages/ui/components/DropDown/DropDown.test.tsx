import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';

describe('DropDown', () => {
  test('shows the list items in Dropdown', () => {
    render(
      <DropDown
        className="w-48 text-sm"
        data={['Edit', 'Delete']}
        render={(item) => {
          return (
            <li key={item} className="w-2">
              {item}
            </li>
          );
        }}
      />,
    );
    const list = screen.getByRole('list');
    expect(list).toHaveTextContent('Edit');
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
