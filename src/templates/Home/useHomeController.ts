'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

const schema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().min(1, 'E-mail é obrigatório').email('E-mail não é válido'),
  phone: z
    .string()
    .length(16, 'Telefone inválido')
    .transform((val) => val.trim())
})

export type FormData = z.infer<typeof schema> & {
  [key: string]: string
}

export type useHomeControllerProps = {
  onSubmit?: (data: FormData) => void
}

export function useHomeController({ onSubmit }: useHomeControllerProps) {
  const router = useRouter()
  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    if (onSubmit) onSubmit(data)

    const params = new URLSearchParams()

    for (const key in data) {
      params.append(key, data[key])
    }

    const paramsString = params.toString()
    router.push(`/result?${paramsString}`)
  })

  return {
    control,
    register,
    errors,
    handleSubmit
  }
}
