import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Banner
        title="Defy death"
        subtitle="Play the new CrashLands season"
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )
    //verifique se o title existe renderizado
    expect(screen.getByLabelText(/defy death/i)).toBeInTheDocument()
    //verifique se o subtitle existe renderizado

    //verifique se a imagem existe renderizado
    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
  })
})
