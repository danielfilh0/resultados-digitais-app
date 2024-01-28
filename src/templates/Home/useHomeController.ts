/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FormSchemaData, formSchema } from '@/utils/form-schema'
import { useCallback, useState } from 'react'

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
  const [phoneFormat, setPhoneFormat] = useState('(##) ####-####')

  const handleChangePhone = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      callback: (...event: any[]) => void
    ) => {
      const phoneLength = e.target.value.replace(/\s/g, '').length
      if (phoneLength > 13) {
        setPhoneFormat('(##) # ####-####')
      } else if (phoneLength === 13) {
        setPhoneFormat('(##) ####-#####')
      }
      callback(e)
    },
    [setPhoneFormat]
  )

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
    handleSubmit,
    phoneFormat,
    handleChangePhone
  }
}
