import {createSlice} from '@reduxjs/toolkit'

// todo slice, create reducers and actions for our state
export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  // REDUCERS : functions we call to provide an action to our state
  reducers: {
    setTodo: (state, action) => {
      return [...action.payload]
      // write code for adding a 'todo'
    }
  }
})

// getTodo: async (state, action) => {
//   const data = await axios
//       .get('https://shrouded-thicket-78021.herokuapp.com/api/todo')
//       .then((response) => {
//         console.log(response.data);
//         return response.data
//       })
//     state.todos = [...state.todos, ...data]
//   }

export const { setTodo } = todoSlice.actions
export default todoSlice.reducer
