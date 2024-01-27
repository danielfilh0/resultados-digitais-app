'use client'

import { Heading } from '@/components/Heading'
import * as S from './styles'
import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import Image from 'next/image'
import { TextField } from '@/components/TextField'
import { Button } from '@/components/Button'
import { ArrowIcon } from '@/components/ArrowIcon'
import Link from 'next/link'

export function Home() {
  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <Heading font="redHat" align="center">
            Gerador de Cartão de Visita
          </Heading>
          <Text size="large">
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no
            Instagram e demais canais digitais.
          </Text>
        </S.Header>
        <S.Main>
          <Image
            src="/illustration.png"
            width={471}
            height={347}
            alt="Imagem cartoom de um homem criando um quadro de pintura, fazendo a analogia à criação de um cartão de visita"
          />
          <S.Form>
            <S.FieldsWrapper>
              <TextField label="Nome*" id="name" />
              <TextField
                label="Telefone*"
                id="phone"
                type="number"
                placeholder="(00) 0 0000-000"
              />
              <TextField
                label="E-mail*"
                id="email"
                type="email"
                placeholder="nome@email.com"
              />
            </S.FieldsWrapper>
            <S.Warnings>
              <ul>
                <Text as="li" size="small">
                  Ao preencher o formulário, concordo * em receber comunicações
                  de acordo com meus interesses.
                </Text>
                <Text as="li" size="small">
                  Ao informar meus dados, eu concordo com a{' '}
                  <Link
                    href="https://legal.rdstation.com/pt/privacy-policy/"
                    target="_blank"
                  >
                    Política de Privacidade
                  </Link>
                </Text>
              </ul>
              <Text size="small">
                * Você pode alterar suas permissões de comunicação a qualquer
                tempo.
              </Text>
            </S.Warnings>
            <Button type="submit" icon={<ArrowIcon size={24} />}>
              Gerar Cartão Grátis
            </Button>
          </S.Form>
        </S.Main>
      </Container>
    </S.Wrapper>
  )
}
