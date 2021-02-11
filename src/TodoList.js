import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        
        const listItems = this.props.todoList.map((item, i) =>
        <li key={i}>{item.text} -- {item.priority} -- {item.dueDate.toString()}
        </li>
        );

        return (
        <ul>{listItems}</ul>
        );
      
    }
    

}