import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    ${media.greaterThan('medium')`
      padding: 0;
    `}
  `}
`
