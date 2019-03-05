import React, { Component } from 'react';

// set up styled components for strikethrough!

class ToDo extends Component {
    constructor(props){
        super(props);

        
        console.log(this.props.todo);
    }


    render() {
        return( 
            <div className="ToDo" completed={this.props.todo.completed} onClick={this.props.toggle}>
                {this.props.todo.item}
            </div>
        )
    }
}

export default ToDo;