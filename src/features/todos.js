import {createSlice} from '@reduxjs/toolkit'

// todo slice, create reducers and actions for our state
export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  // REDUCERS : functions we call to provide an action to our state
  reducers: {
    addTodo: (state, action) => {
      return action.payload
      // write code for adding a 'todo'
    }
  }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
