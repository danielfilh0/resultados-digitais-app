'use client'

import { Container } from '@/components/Container'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { CaretLeft } from '@phosphor-icons/react'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { ArrowIcon } from '@/components/ArrowIcon'

export function Result() {
  return (
    <S.Wrapper>
      <Container>
        <Image
          src="/illustration.png"
          width={455}
          height={335}
          alt="Imagem cartoom de um homem criando um quadro de pintura, fazendo uma analogia à criação de um cartão de visita"
        />
        <S.Result>
          <Link href="/">
            <CaretLeft />
            Gerar outro cartão
          </Link>

          <S.Card>
            <Image
              src="/short-logo.png"
              width={70}
              height={60}
              alt="Logo secundária da Resultados Digitais"
            />
            <S.Divider />
            <ul>
              <Text as="li" color="black" size="large">
                Nome e Sobrenome
              </Text>
              <Text as="li" color="black" size="large">
                (00) 0000-0000
              </Text>
              <Text as="li" color="black" size="large">
                meuemail@email.com
              </Text>
            </ul>
          </S.Card>

          <Button
            icon={<ArrowIcon size={24} direction="down" />}
            iconPosition="left"
            disabled
          >
            Baixar Cartão
          </Button>

          <Link href="/">
            <span>Fazer um teste grátis no RD Station Marketing</span>
            <ArrowIcon size={24} />
          </Link>
        </S.Result>
      </Container>
    </S.Wrapper>
  )
}
