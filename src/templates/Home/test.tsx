import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import { Home } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}))

const onSubmit = jest.fn()

describe('<Home />', () => {
  it('should render the section', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /gerador de cartão de visita/i })
    ).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    renderWithTheme(<Home onSubmit={onSubmit} />)

    const nameInput = screen.getByRole('textbox', { name: 'Nome*' })
    const emailInput = screen.getByRole('textbox', { name: 'E-mail*' })
    const phoneInput = screen.getByRole('textbox', { name: 'Telefone*' })

    act(() => {
      fireEvent.input(nameInput, {
        target: {
          value: 'Random name'
        }
      })
      fireEvent.input(emailInput, {
        target: {
          value: 'randomemail@gmail.com'
        }
      })
    })

    await userEvent.type(phoneInput, '85986259101')
    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })

  it("shouldn't submit the form when name is invalid", async () => {
    renderWithTheme(<Home onSubmit={onSubmit} />)

    const nameInput = screen.getByRole('textbox', { name: 'Nome*' })

    fireEvent.input(nameInput, {
      target: {
        value: 'a'
      }
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(
      await screen.findByText('O nome deve ter pelo menos 2 caracteres')
    ).toBeInTheDocument()
  })

  it("shouldn't submit the form when email is invalid", async () => {
    renderWithTheme(<Home />)

    const emailInput = screen.getByRole('textbox', { name: 'E-mail*' })

    fireEvent.input(emailInput, {
      target: {
        value: 'invalidemail'
      }
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(await screen.findByText('E-mail não é válido')).toBeInTheDocument()
  })

  it("shouldn't submit the form when phone is invalid", async () => {
    renderWithTheme(<Home />)

    const phoneInput = screen.getByRole('textbox', { name: 'Telefone*' })

    fireEvent.input(phoneInput, {
      target: {
        value: '99999'
      }
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(await screen.findByText('Telefone inválido')).toBeInTheDocument()
  })
})
