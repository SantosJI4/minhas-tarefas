import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

interface TarefaState {
  id: number
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

interface TarefasState {
  itens: TarefaState[]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      {
        id: 1,
        titulo: 'estudar java',
        prioridade: enums.Prioridade.IMPORTANTE,
        status: enums.Status.PENDENTE,
        descricao: 'ver a aula 3 da ebac'
      },
      {
        id: 2,
        titulo: 'estudar javascript',
        prioridade: enums.Prioridade.IMPORTANTE,
        status: enums.Status.PENDENTE,
        descricao: 'ver a aula 3 da ebac'
      },
      {
        id: 3,
        titulo: 'estudar typescript',
        prioridade: enums.Prioridade.IMPORTANTE,
        status: enums.Status.CONCLUIDA,
        descricao: 'ver a aula 5 outro curso'
      }
    ]
  } as TarefasState,
  reducers: {
    remover: (state: TarefasState, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state: TarefasState, action: PayloadAction<TarefaState>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<TarefaState, 'id'>>) => {
      const tarefaJaExite = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaExite) {
        alert('Tarefa já existe')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
