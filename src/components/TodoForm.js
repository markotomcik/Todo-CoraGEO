import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';



const TodoForm = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    // stazujes sa ze ti to nejde a pritom sa pozri ako pridavas tasky:
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
    // kedze tasky nepridavas cez reducer, reducer ostava prazdny a nema s cim pracovat
    // tasky mas pridavat cez reducer tzn volat akciu co si si definoval dole na riadku 58
    // takze zmenit to na funkciu this.props.addTodo()
    // a aby ti to fungovalo takto ako som napisal, zmenit cely tento komponent z funkcie na class
    // nic narocne iba return zaobalit do funkcie render() atd
    // takto by ti to malo fungovat
    // nezabudni pozriet koment v ../actions/index.js:34


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

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(actions.addTodo(todo))
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(TodoForm);
