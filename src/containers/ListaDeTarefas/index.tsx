import Tarefa from '../../components/Tarefa/index'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar Type',
    descricao: 'ver a aula 3 da ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'pagar antes do dia 5',
    prioridade: 'importante',
    status: 'concluida'
  },
  {
    titulo: 'ir treinar',
    descricao: 'fazer treino de perna',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>2 tarefas marcadas como concluídas</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
