import { TOGGLE, ADD_TODO, REMOVE_COMPLETED } from '../actions';

const a_list = {
    list: [
        {item: "Eat Food", completed: false},
        {item: "Sleep", completed: false},
        {item: "Shopping", completed: false}
  }

// use Object.Assign()
// https://learn.lambdaschool.com/fsw/module/recyj0rncjqj5gtxx 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
export default (state = a_list, action) => {
    switch(action.type) {
        case TOGGLE:
            return {

            }
        case ADD_TODO: 
            return {

            }
        case REMOVE_COMPLETED: 
            return {

            }
    }

}