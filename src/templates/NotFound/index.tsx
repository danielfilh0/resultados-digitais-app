'use client'

import { Heading } from '@/components/Heading'
import * as S from './styles'
import { Container } from '@/components/Container'

export function NotFound() {
  return (
    <S.Wrapper>
      <Container>
        <Heading align="center">404 - Página não encontrada</Heading>
      </Container>
    </S.Wrapper>
  )
}
