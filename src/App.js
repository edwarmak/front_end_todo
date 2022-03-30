import logo from './logo.svg';
import './App.css';
import React,
{useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo} from './features/todos'

const App = () => {

  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todos)

  const getTodo = () => {
    axios
      .get('https://shrouded-thicket-78021.herokuapp.com/admin/todo_api/todo/')
      // .then(response) => {
      //   dispatch(state)
      // }
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
          <button type="submit" onClick={() => {dispatch(addTodo({id:'', title:'', description:''}))}}></button>
        </div>
        <button onClick={() => getTodo()}/>
        <div className="displayTodo">

        </div>
      </div>
    );
}

// LINE 37
// {todoList.map((todo) => {
//   return <h1>{todo.title}</h1>
// })}

export default App;
