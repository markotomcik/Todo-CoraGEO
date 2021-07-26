import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import * as actions from './actions';



function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const editTodo = (id, text) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.text = text
    setTodos(newTodos)
  }

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      case 'softdeleted':
        setFilteredTodos(todos.filter(todo => todo.softdeleted === true))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
 
  
  return (
    <div className="ToDo bg-gradient-to-r from-pink-400 via-blue-500 to-pink-500 min-h-screen pt-20">
    <div className=" bg-gray-900 border-2 w-1/5 mx-auto ">
      <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} editTodo={editTodo} todos={todos}  filteredTodos={filteredTodos} />
    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  initTodos: (todos) => dispatch(actions.initTodos(todos))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
