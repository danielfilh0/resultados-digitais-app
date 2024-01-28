import type { Metadata } from 'next'
import { Default } from '@/layouts/Default'

export const metadata: Metadata = {
  title: 'Gerador de Cartão de Visita',
  description: 'Página não encontrada'
}

export default function DefaultLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <Default>{children}</Default>
}
