import React, {useEffect} from 'react';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    console.log(todos)

    const updateTodos = (id, title, completed) => {
        setTodos(todos.map(todo => todo.id === id ?
            {id, title, completed}: todo))
        setEditTodo(null)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (!editTodo) {
            if (input !== '') {
                setTodos([...todos, {id: crypto.randomUUID(), title: input, completed: false}])
                setInput('')
            }
        } else {
            updateTodos(editTodo.id, input, editTodo.completed)
        }
    }


    useEffect(() => {
        editTodo ? setInput(editTodo.title) : setInput('')
    }, [setInput, editTodo]);


    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder='Enter the task'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>{editTodo ? 'OK' : 'Add'}</button>
        </form>
    );
};

export default Form;