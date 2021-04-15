import { render, screen } from '@testing-library/react'
import { AppLayout } from './index'

describe('AppLayout#Sidebar', () => {
  test('shows the links', () => {
    render(<AppLayout title="Programs"> </AppLayout>)
    const programsMenuItem = screen.getByRole('menuitem', {
      name: /Programs/i,
    })
    expect(programsMenuItem).toBeInTheDocument()
  })
})

describe('AppLayout', () => {
  test('displays the children passed', () => {
    render(
      <AppLayout title="Programs">
        <h3>Layout</h3>
      </AppLayout>,
    )
    const text = screen.getByRole('heading', {
      name: /Layout/i,
    })
    expect(text).toBeInTheDocument()
  })
})
