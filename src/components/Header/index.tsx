import Link from 'next/link'
import { Container } from '../Container'
import { Logo } from '../Logo'
import * as S from './styles'

export function Header() {
  return (
    <S.Wrapper>
      <Container>
        <Logo />
        <nav>
          <Link href="/">Gerador de Cartão de Visita</Link>
        </nav>
      </Container>
    </S.Wrapper>
  )
}
