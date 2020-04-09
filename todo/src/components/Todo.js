import React, { useState, useReducer } from 'react';
import { todoReducers, initialObj } from '../reducers/todoReducers';

const Todo = () => {
    const [todoState, dispatch] = useReducer(todoReducers, initialObj);
    const [newTodo, setNewTodo] = useState("");

    return (
        <div className="container">
            <ul className="todos">
                <li className="todo">{todoState.item}</li>
            </ul>
        </div>
    )
}

export default Todo;
