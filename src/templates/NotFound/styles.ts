import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.lg} 0;
  `}
`
