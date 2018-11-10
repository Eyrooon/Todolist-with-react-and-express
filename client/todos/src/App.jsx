import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/todos.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosContainer />
      </div>
    );
  }
}

export default App;
