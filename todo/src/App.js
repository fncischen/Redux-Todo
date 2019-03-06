import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ToDoLog from "./Reducers/"

import ToDoList from "./Components/ToDoList"


class App extends Component {
  render() {
    return (
      <ToDoList/>
    );
  }
}

export default App;
