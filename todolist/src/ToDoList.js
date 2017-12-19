import React from 'react';
import './index.css';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }
  
  addItem(item) {
    var itemsArray = this.state.items;

    if (this._inputElement.value !== '') {
      itemsArray.unshift({
        text: this._inputElement,
        key: Date.now()
      });


      this.setState({
        items: itemsArray
      });
    }
    this.inputElement = '';
    console.log('To Do Items: ' + itemsArray);
    item.preventDefault();
  }
  
  render() {
    return (
      <div>      
        <h2>To Do List</h2>
        <form onSubmit={this.addItem}>
          <input ref={ (a) => this._inputElement = a } placeholder="Enter task"></input>
          <button>Add</button>
        </form>
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
