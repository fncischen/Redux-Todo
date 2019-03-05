// a library of actions that our Reducer has to decide what to do with
// after the store is dispatching the actions from our React Component [view];

export const TOGGLE = 'TOGGLE';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = "TOGGLE_DODO";


// Actions // Study Guide
// https://redux.js.org/basics/actions


// action creators that our React ToDoList can utilize 
export function addToDo(text) {
    return { type: ADD_TODO, text }
}
  
export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}
  