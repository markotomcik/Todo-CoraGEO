import { v4 as uuidv4 } from 'uuid'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.payload.name,
          softdeleted: action.payload.softdeleted,
          complete: action.payload.complete
        }
      ]
    case 'EDIT_TODO':
      return state.map((todo) => {
        return todo.id === action.payload.id ? {
          ...todo,
          name: action.payload.name
        } : todo
      })
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        return todo.id === action.payload.id ? {
          ...todo,
          complete: !todo.complete
        } : todo
      })
    case 'SOFTDELETE_TODO':
      return state.map((todo) => {
        return todo.id === action.payload.id ? {
          ...todo,
          softdeleted: !todo.softdeleted
        } : todo
      })
    // ked sa pozries tu vidis ze z payloadu pouzivas id ktore potom porovnavas
    // 1. id ani neposielas
    // 2. posielas zbytocnosti, ktore mozes vyhodit
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id)
    default:
      return state
  }
}

export default todos;