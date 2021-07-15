import React, { useRef, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { SiVerizon } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";



const Todo = ({ text, todo, todos, setTodos, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const todoNameRef = useRef(null)
  todoNameRef?.current?.focus()

  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
        };
      }
      return item;
    })
    );
  };

  const editHandler = (text) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, text,
        };
      }
      return item;
    })
    );
  };
  const softDeleteHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, softdeleted: !item.softdeleted,
        };
      }
      return item;
    })
    );
  };
  const handleSaveTodo = () => {
    if (todoNameRef.current !== null) {
      const name = todoNameRef.current.value
      if (name === '') {
        setEdit({
          id: null,
          value: ''
        });
        return
      }
      editTodo(edit.id, name)
      todoNameRef.current.value = ''
      setEdit({
        id: null,
        value: ''
      });
    }
  }

  const handleTodoChange = (value) => {
    setEdit({ ...edit, value: value.target.value })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSaveTodo()
    }
  }

  const handleEditTodo = () => {
    setEdit({ id: todo.id, value: todo.text })
  }

  if (edit.id) {
    return (
      <div className='bg-gray-900 text-white font-semibold mx-2 text-xl space-x-0'>
        <input className="bg-black text-white font-semibold border rounded-xl" ref={todoNameRef} autoFocus type="text" value={edit.value} onChange={handleTodoChange} onKeyDown={handleKeyDown} />
        <FiArrowDown className="text-2xl" title="Save" onClick={handleSaveTodo}/>
      </div>
    )
  }
  return (
    <div className='bg-gray-900 text-white font-semibold mx-2 text-xl space-x-0'>
      <li title="Todo" className={`todo-item ${todo.softdeleted ? 'text-red-400' : todo.completed ? 'text-green-400' : 'text-white'}`}>{text}</li>
      <SiVerizon onClick={completeHandler} type="checkbox" className="inline-block mx-80 text-white font-semibold" title="Complete" />
      <MdDelete onClick={softDeleteHandler} className="inline-block text-2xl" title="SoftDelete" />
      <RiCloseCircleLine onClick={deleteHandler} className="inline-block text-2xl" title="Delete" />
      <FiEdit3 onClick={handleEditTodo} className="inline-block text-2xl" placeholder="Edit" />
    </div>
  );
};
//please work T.T

export default Todo;

//I am not responsible of this code.
//They made me write it, against my will.
