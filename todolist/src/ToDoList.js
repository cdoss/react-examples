import React from 'react';
import './index.css';
import ToDoItem from './ToDoItem.js';

class ToDoList extends React.Component {
  render() {
    return (
      <div>      
        <h2>To Do List</h2>
        <div>
          <input placeholder="Enter task"></input>
          <button>Add</button>
        </div>
        <div className="toDoList">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>
      </div>
    );
  }
}

export default ToDoList;
