import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDo from "./ToDo"
import {addToDo, toggleToDo, removeCompleted} from "../Actions";

class ToDoList extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.list);

        console.log("add to do", this.props.addToDo);
        console.log("remove completed", this.props.removeCompleted);
        console.log("toggle to do", this.props.toggleToDo);
        this.state = {
             text: ""
        }
    }

    toggle = (index) => {
        this.props.toggleToDo(index);
    }

    addToDo = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.text);
    }

    handleChanges = (e) => {
        console.log("text", e.target.value);
        this.setState({text: e.target.value})
    }

    render() {
        console.log("Rerendering list", this.props.list);
        return(

        <div className="container">

            <div className="ToDoList">
            {
                
                this.props.list.map((todo,index) => {
                    return <ToDo todo={todo} toggle={() => this.toggle(index)}/>
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
        list: state.list,
        text: state.text 
    }
}

export default connect(mapStateToProps,{addToDo,toggleToDo,removeCompleted})(ToDoList); 