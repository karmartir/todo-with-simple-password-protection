import React, {useState} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    const initialPassword = '12345'
    const [password, setPassword] = useState('')
    const [toggle, setToggle] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const onLoginSubmit = (e) => {
        e.preventDefault()
    }

    const correctPassword = () => {
        password === initialPassword ? setToggle(true) : alert('Your password is incorrect')
        setPassword('')
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            {!toggle ? (

                    <form onSubmit={onLoginSubmit}>
                        <input
                            type={showPassword ? 'text' : 'password' }
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button onClick={handleShowPassword}>{showPassword ? 'hide password' : 'show password'}</button>
                        <button type='submit' onClick={correctPassword}>Login</button>
                    </form>) :

                <div>


                    <h1>Todo list</h1>


                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />

                    <TodoList
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />

                </div>
            }
                </>
                )
                ;
            };

            export default App;