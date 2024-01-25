import styled, { DefaultTheme, css } from 'styled-components'

export type WrapperProps = {
  $color: 'white' | 'dark'
  $size: 'small' | 'medium' | 'large'
  $font: 'nunito' | 'redHat'
  $align: 'left' | 'center'
}

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.lg};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlg};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes['2xlg']};
  `,
  nunito: (theme: DefaultTheme) => css`
    font-family: ${theme.font.family.primary};
  `,
  redHat: (theme: DefaultTheme) => css`
    font-family: ${theme.font.family.tertiary};
  `
}

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, $color, $font, $size, $align }) => css`
    color: ${theme.colors[$color!]};
    text-align: ${$align};

    ${!!$size && wrapperModifiers[$size](theme)};
    ${!!$font && wrapperModifiers[$font](theme)};
  `}
`
