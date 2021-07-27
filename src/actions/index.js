export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: {
    name: todo.name,
    softdeleted: todo.softdeleted,
    complete: todo.complete
  }
})

export const editTodo = todo => ({
  type: 'EDIT_TODO',
  payload: {
    id: todo.id,
    name: todo.name,
  }
})

export const completeTodo = todo => ({
  type: 'COMPLETE_TODO',
  payload: {
    id: todo.id,
    complete: todo.complete
  }
})

export const softDeleteTodo = todo => ({
  type: 'SOFTDELETE_TODO',
  payload: {
    id: todo.id,
    softdeleted: todo.softdeleted
  }
})

// tu treba v payload posielat id nie name ani cleared ani complete
// pozri si ../reducers/todos.js:36
export const deleteTodo = todo => ({
  type: 'DELETE_TODO',
  payload: {
    name: todo.name,
    cleared: todo.cleared,
    complete: todo.complete
  }
})

export const initTodos = todos => ({
  type: 'INIT_TODOS',
  payload: todos
})