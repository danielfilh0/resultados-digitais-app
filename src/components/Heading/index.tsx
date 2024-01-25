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
  return (
    <S.Wrapper as={as} $font={font} $size={size} $color={color} $align={align}>
      {children}
    </S.Wrapper>
  )
}
