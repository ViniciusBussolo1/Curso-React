import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'buy Now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render heading and buttons', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()
  })
})
