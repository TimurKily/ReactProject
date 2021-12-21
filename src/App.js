import './App.css';
import Timer from './components/timer'
import ToDoApp from './components/todoapp';
import React from 'react'

class App extends React.Component{
  render(){
    return (
      <div>
        <Timer />
        <ToDoApp />
      </div>
    );
  }
}

export default App;
