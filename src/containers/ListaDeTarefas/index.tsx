import Tarefa from '../../components/Tarefa/index'
import { Container } from './styles'

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>2 tarefas marcadas como concluídas</p>
      <ul>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
