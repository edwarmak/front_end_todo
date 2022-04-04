import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
// change from get Todo
import {setTodo, addTodo, deleteTodo, updateTodo} from './features/todos'

const App = () => {

  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todos)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editTodo, setEditTodo] = useState({id: '', title: '', description: ''})
// STATE TO TOGGLE EDIT FORM
  const [show, setShow] = useState(false)

// VIEW AND DISPLAY OUR DATA
  const getTodo = () => {
  axios
    .get('https://shrouded-thicket-78021.herokuapp.com/api/todo')
    .then((response) => {
      // console.log(response.data)
      dispatch(setTodo(response.data))
    })
  }

// ADD NEW DATA
  const handleCreate = (addNewTodo) => {
    axios
      .post('https://shrouded-thicket-78021.herokuapp.com/api/todo', addNewTodo)
      .then((response) => {
        console.log(response.data)
        dispatch(addTodo(response.data))
        console.log(addTodo);
      })
  }

// DELETE EXISTING DATA
  const handleDelete = (id) => {
    axios
      .delete('https://shrouded-thicket-78021.herokuapp.com/api/todo/' + id)
      .then((response) => {
        dispatch(deleteTodo(response.data))
        getTodo()
      })
    console.log(deleteTodo);
  }

// UPDATE OR EDIT EXISTING DATA
  const handleUpdate = (todo, id) => {
    todo.id = id
    console.log(todo);
  axios
    .put('https://shrouded-thicket-78021.herokuapp.com/api/todo/' + id, todo)
    .then((response) => {
      dispatch(updateTodo(response.data))
      getTodo()
    })
}

  const handleChange = (event) => {
    setEditTodo({...editTodo, [event.target.name] : event.target.value})
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

                <div className="nav">
                  <h4>{todo.title}</h4>
                  <h5>{todo.description}</h5>
                </div>

                <div className="todo">

                <button onClick={ () => setShow((s) => !s)}>Toggle Edit Form</button>
                  <form style={{ display: show ? "block" : "none" }}>

                    <input name="title" value={editTodo.title} type="text" placeholder="Edit Title..." onChange={(event) => {handleChange(event)}}/>
                    <input name="description" value={editTodo.description} type="text" placeholder="Edit Description..." onChange={(event) => {handleChange(event)}} />
                    <button onClick={() => {handleUpdate(editTodo, todo.id)}}>UPDATE</button>
                  </form>
                  <button onClick={() => handleDelete(todo.id)}>DELETE</button>
                </div>

              </div>
            )
          })}
        </div>

      </div>
      </>
    );
}


export default App;
