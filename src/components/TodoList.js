import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos, editTodo }) {
  return (
    <div className="todo-container bg-gray-900">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo setTodos={setTodos} editTodo={editTodo} todos={todos} key={todo.id} text={todo.text} todo={todo} filteredTodos={filteredTodos} /> 
        ))}
      </ul>
    </div>
  );
};

export default TodoList;