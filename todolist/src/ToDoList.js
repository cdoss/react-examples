import React from 'react';

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
          <li>To Do Item</li>
          <li>To Do Item</li>
          <li>To Do Item</li>
          <li>To Do Item</li>
        </div>
      </div>
    );
  }
}

export default ToDoList;
