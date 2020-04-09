export const initialObj = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Clean my car',
            completed: false,
            id: 3949032382
        },
        {
            item: 'Do laundry',
            completed: false,
            id: 39204589432
        }
    ]
}

export const todoReducers = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                })
            }
        case "CLEAR_COMPLETED": 
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
};