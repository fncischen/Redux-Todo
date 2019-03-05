import { TOGGLE_TODO, ADD_TODO, REMOVE_COMPLETED } from '../Actions';

const a_list = [
        {item: "Eat Food", completed: false},
        {item: "Sleep", completed: false},
        {item: "Shopping", completed: false}
]


// use Object.Assign()
// https://learn.lambdaschool.com/fsw/module/recyj0rncjqj5gtxx 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// I'm really in love with Object.assign
export default (state = a_list, action) => {
    switch(action.type) {
        case TOGGLE_TODO:
            return state.map((todo,index) => 
                (index == action.index)
                ? {...todo, completed: !todo.completed}
                : todo
                )
        case ADD_TODO: 
            return Object.assign({}, state, {item: action.text, completed: false});
        case REMOVE_COMPLETED:
            return state.filter(todo => todo.completed == false); 
        default:
            return state;
        }

}