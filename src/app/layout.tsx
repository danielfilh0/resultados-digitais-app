import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Resultados Digitais',
    default: 'Resultados Digitais'
  },
  description:
    'Crie cartões de visita impressionantes online com nosso gerador fácil de usar. Personalize designs exclusivos, escolha entre uma variedade de modelos e destaque-se profissionalmente. Experimente agora e deixe uma ótima primeira impressão com seus contatos.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
