import { render, screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    //contact
    //follow us
    //links
    //location

    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
