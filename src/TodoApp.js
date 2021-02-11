import React from 'react'
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {

    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleText = this.handleText.bind(this);
      this.handlePriority = this.handlePriority.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList todoList={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleText}
              value={this.state.text}
            />
            <input
              id="new-todo2"
              onChange={this.handlePriority}
              value={this.state.priority}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handlePriority(e) {
      this.setState({ text: e.target.value });
    }

    handleText(e) {
      this.setState({ priority: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: Date.now()
        
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }
