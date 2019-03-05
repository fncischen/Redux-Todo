// a library of actions that our Reducer has to decide what to do with
// after the store is dispatching the actions from our React Component [view];

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = "TOGGLE_DODO";

export const REMOVE_COMPLETED ="REMOVE_COMPLETED";


// Actions // Study Guide
// https://redux.js.org/basics/actions


// action creators that our React ToDoList can utilize 
// action creators are like vending machines that the user
// places data, and the vending machine returns an action (i.e. chips/soda)
// that are digested by the user (i.e. eaten or "reduced"),
// which changes the state of the user. 

export function addToDo(text) {
    return { type: ADD_TODO, text }
}
  
export function toggleToDo(index) {
    return { type: TOGGLE_TODO, index: index, completed: false}
}

export function removeCompleted() {
    return { type: REMOVE_COMPLETED}
}
  