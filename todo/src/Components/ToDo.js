import React, { Component } from 'react';
import { NONAME } from 'dns';

// set up styled components for strikethrough!

class ToDo extends Component {
    constructor(props){
        super(props);

        
        console.log(this.props.todo);
    }


    render() {
        const todo_completed = {
            textDecorationLine: 'line-through'        
        }
        
        const todo = {
            textDecorationLine: "none"
        }

        if (this.props.todo.completed == true) {
            return( 
                <div className="todo completed" style={todo_completed} onClick={this.props.toggle}>
                    {this.props.todo.item}
                </div>
            )
        }
        else {
            return (
                <div className="todo" style={todo} onClick={this.props.toggle}>
                    {this.props.todo.item}
                </div>
            )
        }

    }
}

export default ToDo;