import { screen } from '@testing-library/react'

import { Default } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Default />', () => {
  it('should render the default layout with children', () => {
    const { container } = renderWithTheme(<Default>Default</Default>)

    expect(screen.getByText('Default')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
