import { render, screen } from '@testing-library/react'
import Icon from './Icon'

describe('Icon', () => {
  test('shows the class passed on icon', () => {
    render(<Icon name="add-circled" className="w-20" />)
    const icon = screen.getByTestId('Icon')
    expect(icon.firstChild).toHaveAttribute('xmlns')
  })
})
