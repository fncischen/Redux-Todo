import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ToDoLog from "./Reducers/"

const store = createStore(ToDoLog);

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
