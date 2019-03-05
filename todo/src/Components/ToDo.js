import React, { Component } from 'react';

class ToDo extends Component {

    render() {
        return( 
            <div className="ToDo" isCompleted={this.props.todo.completed} onClick={this.props.toggle}>
                {this.props.todo.item}
            </div>
        )
    }
}

export default ToDo;