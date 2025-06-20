import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const filtroCard = ({ ativo, contador, legenda }: Props) => {
  return (
    <S.Card ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
export default filtroCard
