import React from 'react'

const TodoForm = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText !== ''){
            setTodos([
                ...todos,
                 { text: inputText, completed: false, softdeleted: false, id: Math.random() * 10000 },
            ]);
            setInputText('');
        }
    };
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form className="text-center">
            <h1 className="text-white font-semibold text-3xl " title="Title">Todo App</h1>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input pb-1 border text-white font-semibold bg-black rounded-xl"
                placeholder="Write todo..."

            />
            <button title="Add todo" onClick={submitTodoHandler} className="todo-button text-white border rounded-xl mx-2 font-semibold" type="submit">
                Add
            </button>
            <div className="select">
                <select title="Filter todos"onChange={statusHandler} name="todos" className="text-white border rounded-xl my-2 font-semibold bg-black">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    <option value="softdeleted">Softdeleted</option>
                </select>
            </div>

        </form>
    )
}

export default TodoForm;