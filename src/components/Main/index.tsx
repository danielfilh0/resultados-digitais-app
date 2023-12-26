import * as S from './styles'

type MainProps = {
  title?: string
}

export function Main({ title = 'Hello World' }: MainProps) {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  )
}
