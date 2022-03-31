import logo from './logo.svg';
import './App.css';
import React,
{useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
// change from get Todo
import {setTodo} from './features/todos'
import './features/todos'

const App = () => {

  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todos)

  const getTodo = () => {
  axios
    .get('https://shrouded-thicket-78021.herokuapp.com/api/todo')
    .then((response) => {
      console.log(response.data);
      dispatch(setTodo(response.data))
    })
  }

  useEffect(() => {
    getTodo()
  }, [])

    return (
      <div className="App">
        <h1>Hello</h1>
        <div className="addTodo">
          <input type="text" placeholder="title..." />
          <input type="text" placeholder="description..." />
          <button type="submit" onClick={() => getTodo()}></button>
        </div>
        <button onClick={() => getTodo()}/>
        <div className="displayTodo">
          {todoList.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
              <h4>{todo.title}</h4>
              <h5>{todo.description}</h5>
              </div>
            )
          })}
        </div>
      </div>
    );
}

// LINE 37
// {todoList.map((todo) => {
//   return <h1>{todo.title}</h1>
// })}

export default App;
