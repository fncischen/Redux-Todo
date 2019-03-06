import { TOGGLE_TODO, ADD_TODO, REMOVE_COMPLETED } from '../Actions';

const a_list = [
        {item: "Eat Food", completed: false},
        {item: "Sleep", completed: false},
        {item: "Shopping", completed: false}
]

const initialState = {
    list: a_list,
    text: ""
}

// use Object.Assign()
// https://learn.lambdaschool.com/fsw/module/recyj0rncjqj5gtxx 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// I'm really in love with Object.assign
export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_TODO:
            console.log(state.list);
            return Object.assign({}, state, {list: state.list.map((todo,index) => 
                (index == action.index)
                ? {...todo, completed: !todo.completed}
                : todo
                )});
        case ADD_TODO: 
            return Object.assign({}, state, {list: [...state.list, {item: action.text, completed: false}]});
        case REMOVE_COMPLETED:
            return Object.assign({}, state, {list: state.list.filter(todo => todo.completed == false)}); 
        default:
            return state;
        }

}