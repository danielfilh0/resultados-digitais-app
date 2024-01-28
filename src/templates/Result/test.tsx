import { screen } from '@testing-library/react'

import { Result } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Result />', () => {
  it('should render the card download button', () => {
    const { container } = renderWithTheme(
      <Result
        name="Example Name"
        email="emailexample@example.com"
        phone="(99) 9 9999-9999"
      />
    )

    expect(
      screen.getByRole('button', { name: /baixar cartão/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should show error if the card data are inconsistent', () => {
    renderWithTheme(<Result name="" email="wrongemail" phone="12345" />)

    expect(screen.getByText(/erro/i)).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /baixar cartão/i })
    ).not.toBeInTheDocument()
  })
})
