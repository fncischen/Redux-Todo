import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDo from "./ToDo"
import {addToDo, toggleToDo, removeCompleted} from "../Actions";

class ToDoList extends Component {

    constructor() {
        super();

        this.state = {
            text: ""
        }
    }

    toggle = (e, index) => {
        e.preventDefault();
        this.props.toggleToDo(index);
    }

    addToDo = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.text);
    }

    handleChanges = (e) => {
        console.log("text":, e.target.value);
        this.setState({text: e.target.value})
    }

    render() {
        return(

        <div className="container">

            <div className="ToDoList">
            {
                this.props.list.map((todo, index) => {
                    <ToDo todo={todo} toggle={() => this.toggle(index)}/>
                })
            }
            </div>


            <div className="ToDoForm">
            
                <form onSubmit={this.addToDo} >

                    <input type="text" onChange={this.handleChanges}></input> 

                    <button type="submit">Submit</button>
                
                </form>

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

export default connect(mapStateToProps,{addToDo,toggleToDo,removeCompleted})(ToDoList); 