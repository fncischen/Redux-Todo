import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDo from "./ToDo"

class ToDoList extends Component {
    render() {
        return(

        <div className="container">

            <div className="ToDoList">
            {
                this.props.list.map(todo => {
                    <ToDo todo={todo} completed={this.props.completed}/>
                })
            }
            </div>


            <div className="ToDoForm">
            
            <button onClick={this.props.removeCompleted}> Remove Completed Items </button>

            </div>

        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list 
    }
}

export default connect(mapStateToProps,{add,completed,removeCompleted})(ToDoList); 