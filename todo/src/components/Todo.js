import React, { useState, useReducer } from 'react';
import { todoReducers, initialObj } from '../reducers/todoReducers';

const Todo = () => {
    // console.log('props', props);
    const [todoState, dispatch] = useReducer(todoReducers, initialObj);
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input 
                    className="todo-input" 
                    type="text" 
                    onChange={handleChanges} 
                />
                <button
                    onClick={() => {
                        dispatch({type: "ADD_TODO", payload: newTodo});
                    }}>Add todo</button>
                <button
                    onClick={() => {
                        dispatch({type: "CLEAR_COMPLETED"});
                    }}>Clear completed todo</button>
            </form>
            {todoState.todos.map(todo => {
                return <div key={todo.id}>
                <p id={todo.id} className={`todo${todo.completed ? ' completed' : ''}`}
                onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id }) }>
                    {todo.item}</p>
                </div>
            })}
        </div>
    )
}

export default Todo;
