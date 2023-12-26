import { ReactNode } from 'react'

import GlobalStyles from '@/styles/global'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
