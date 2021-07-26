import React, { Component } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { SiVerizon } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { connect } from 'react-redux';
import * as actions from '../actions';


class Todo extends Component {

  
  constructor(props) {
    super(props)

    this.todoNameRef = React.createRef()

    this.state = {
      edit: {
        id: null,
        value: ''
      }
    }

    this.todoNameRef?.current?.focus()
  }
  setEdit = (edit) => {
    this.setState({ edit })
  }

  handleSaveTodo = () => {
    if (this.todoNameRef.current !== null) {
      const name = this.todoNameRef.current.value
      if (name === '') {
        this.setEdit({
          id: null,
          value: ''
        });
        return
      }
      this.editTodo(this.edit.id, name)
      this.todoNameRef.current.value = ''
      this.setEdit({
        id: null,
        value: ''
      });
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSaveTodo()
    }
  }

  handleCompleteTodo = () => {
    this.props.completeTodo(this.props.todo)
  }

  handleDeleteTodo = () => {
    this.props.deleteTodo(this.props.todo)
  }

  handleSoftDeleteTodo = () => {
    this.props.softDeleteTodo(this.props.todo)
  }

  handleTodoChange = (value) => {
    this.setEdit({ ...this.state.edit, value: value.target.value })
  }
  render(){
  if (this.state.edit.id) {
    return (
      <div className='bg-gray-900 text-white font-semibold mx-2 text-xl space-x-0'>
        <input className="bg-black text-white font-semibold border rounded-xl" ref={this.todoNameRef} autoFocus type="text" value={this.edit.value} onChange={this.handleTodoChange} onKeyDown={this.handleKeyDown} />
        <FiArrowDown className="text-2xl" title="Save" onClick={this.handleSaveTodo}/>
      </div>
    )
  }
  return (
    <div className='bg-gray-900 text-white font-semibold mx-2 text-xl space-x-0'>
      <li title="Todo" className={`todo-item ${this.props.todo.softdeleted ? 'text-red-400' : this.props.todo.completed ? 'text-green-400' : 'text-white'}`}>{this.props.text}</li>
      <SiVerizon onClick={this.handleCompleteTodo} type="checkbox" className="inline-block mx-80 text-white font-semibold" title="Complete" />
      <MdDelete onClick={this.handleSoftDeleteTodo} className="inline-block text-2xl" title="SoftDelete" />
      <RiCloseCircleLine onClick={this.handleDeleteTodo} className="inline-block text-2xl" title="Delete" />
      <FiEdit3 onClick={this.handleTodoChange} className="inline-block text-2xl" placeholder="Edit" />
    </div>
  );
};
}

const mapDispatchToProps = (dispatch) => ({
  editTodo: (todo) => dispatch(actions.editTodo(todo)),
  completeTodo: (todo) => dispatch(actions.completeTodo(todo)),
  softDeleteTodo: (todo) => dispatch(actions.softDeleteTodo(todo)),
  deleteTodo: (todo) => dispatch(actions.deleteTodo(todo))
})

export default connect(
  null,
  mapDispatchToProps
)(Todo);