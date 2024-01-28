'use client'

import { Result } from '@/templates/Result'
import { useSearchParams } from 'next/navigation'

export default function ResultPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get('name')
  const email = searchParams.get('email')
  const phone = searchParams.get('phone')

  return <Result name={name!} email={email} phone={phone} />
}
