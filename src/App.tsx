import BarraLateral from './containers/barraLateral/index'
import ListaDeTarefas from './containers/ListaDeTarefas/index'
import EstiloGlobal, { Container } from './styles/index'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
