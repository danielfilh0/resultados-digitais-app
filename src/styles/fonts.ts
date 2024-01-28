import { Darker_Grotesque, Nunito, Red_Hat_Display } from 'next/font/google'

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '800'],
  variable: '--font-nunito'
})

export const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-darker'
})

export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-redhat'
})
