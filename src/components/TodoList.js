import React from 'react';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const handleEdit = (todo) => {
        const findTodo = todos.find(el => el.id === todo.id)
        setEditTodo(findTodo)
    }


    const handleDelete = ({id}) => {
        setTodos(todos.filter(el => el.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(todos.map(el => el.id === todo.id
            ? {...el, completed: !el.completed}:el))
    }

    return (
        <div>
            {todos.map(todo =>
                <li key={todo.id}>
                    <span style={todo.completed ? {textDecoration: 'line-through'} : {}} >{todo.title} </span>
                    <button onClick ={() => handleEdit(todo)}>Edit</button>
                    <button onClick={() => handleComplete(todo)}>Complete</button>
                    <button onClick={() => handleDelete(todo)}>Delete</button>
                </li>)}

        </div>
    );
};

export default TodoList;