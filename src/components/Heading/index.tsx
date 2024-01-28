import { nunito, redHatDisplay } from '@/styles/fonts'
import * as S from './styles'

export type HeadingProps = {
  color?: 'white' | 'dark'
  size?: 'small' | 'medium' | 'large'
  font?: 'nunito' | 'redHat'
  as?: React.ElementType
  align?: 'left' | 'center'
  children: React.ReactNode
}

export function Heading({
  color = 'white',
  size = 'large',
  font = 'nunito',
  align = 'left',
  children,
  as
}: HeadingProps) {
  const fontFamily = {
    nunito: nunito.className,
    redHat: redHatDisplay.className
  }

  return (
    <S.Wrapper
      as={as}
      $font={font}
      $size={size}
      $color={color}
      $align={align}
      className={fontFamily[font]}
    >
      {children}
    </S.Wrapper>
  )
}
