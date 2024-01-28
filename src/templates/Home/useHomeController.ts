'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FormSchemaData, formSchema } from '@/utils/form-schema'

export type useHomeControllerProps = {
  onSubmit?: (data: FormSchemaData) => void
}

export function useHomeController({ onSubmit }: useHomeControllerProps) {
  const router = useRouter()
  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors }
  } = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema)
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
