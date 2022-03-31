import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createRoot} from 'react-dom/client';
// import MyErrorBoundary from './MyErrorBoundary'
// provides globalized state (store)
import {configureStore} from '@reduxjs/toolkit';
// component that allows us to add the store to each component
import {Provider} from 'react-redux';

import todosReducer from './features/todos';
//  root reducer
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// setTimeout(callback, 0)

// STORE = globalized state
// ACTION = what is going to be happening - function that returns an object
// REDUCER = modify store based on what action we have done
// DISPATCH = actually executes our action

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
