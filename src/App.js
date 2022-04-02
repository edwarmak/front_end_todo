import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
// change from get Todo
import {setTodo, addTodo, deleteTodo} from './features/todos'

const App = () => {

  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todos)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const getTodo = () => {
  axios
    .get('https://shrouded-thicket-78021.herokuapp.com/api/todo')
    .then((response) => {
      // console.log(response.data)
      dispatch(setTodo(response.data))
    })
  }

  const handleCreate = (addNewTodo) => {
    axios
      .post('https://shrouded-thicket-78021.herokuapp.com/api/todo', addNewTodo)
      .then((response) => {
        console.log(response.data)
        dispatch(addTodo(response.data))
        console.log(addTodo);
      })
  }

  const handleDelete = (id) => {
    axios
      .delete('https://shrouded-thicket-78021.herokuapp.com/api/todo/' + id)
      .then((response) => {
        dispatch(deleteTodo(response.data))
        getTodo()
      })
    console.log(deleteTodo);
  }

  useEffect(() => {
    getTodo()
  }, [])

    return (
      <>
      <div className="App">

        <h1>Todo or not Todo</h1>

        <div className="addTodo">
          <input type="text" placeholder="title..." onChange={(event) => {setTitle(event.target.value)}}/>
          <input type="text" placeholder="description..." onChange={(event) => {setDescription(event.target.value)}}/>
          <button onClick={() => handleCreate({title: title, description: description})}>ADD</button>
        </div>

        <div className="displayTodo">
          {todoList.map((todo) => {
            return (
              <div className="todoCard" key={todo.id}>
              <h4>{todo.title}</h4>
              <h5>{todo.description}</h5>
              <button onClick={() => handleDelete(todo.id)}>DELETE</button>
              </div>
            )
          })}
        </div>

      </div>
      </>
    );
}


export default App;
