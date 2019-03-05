import { TOGGLE, ADD_TODO, REMOVE_COMPLETED } from '../actions';

const a_list = [
        {item: "Eat Food", completed: false},
        {item: "Sleep", completed: false},
        {item: "Shopping", completed: false}
]

const initialState = {
    list: a_list
}

// use Object.Assign()
// https://learn.lambdaschool.com/fsw/module/recyj0rncjqj5gtxx 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// I'm really in love with Object.assign
export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE:
            if (state.list[action.index].completed == false) {

                return Object.assign({}, state, state.list[action.index].completed = true)
            
            } else if (state.list[action.index].completed == true) {
                
                return Object.assign({}, state, state.list[action.index].completed = false)
            
            }
        case ADD_TODO: 
            return Object.assign({}, state, {item: action.text, completed: false});
        case REMOVE_COMPLETED:
            return state.list.filter(todo => todo.completed == false); 
        default:
            return state;
        }

}