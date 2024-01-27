import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  id?: string
  initialValue?: string
  error?: string
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({
  label,
  id = '',
  initialValue = '',
  onInput,
  error,
  disabled = false,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper $error={!!error} $disabled={!!disabled}>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input
        type="text"
        onChange={onChange}
        value={value}
        disabled={disabled}
        {...props}
        id={id}
      />
      {!!error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  )
}
