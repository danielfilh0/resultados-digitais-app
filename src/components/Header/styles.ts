import styled, { css } from 'styled-components'
import { Container } from '../Container'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.sm} 0;

    ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    a {
      font-family: ${theme.font.family.secondary};
      font-size: 1rem;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.dark};
      line-height: 1.1;

      ${media.greaterThan('small')`
        font-size: 1.8rem;
      `}

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xlg};
      `}
    }
  `}
`
