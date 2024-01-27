import { screen } from '@testing-library/react'

import { Result } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Result />', () => {
  it('should render the card download button', () => {
    const { container } = renderWithTheme(<Result />)

    expect(
      screen.getByRole('button', { name: /baixar cartão/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
