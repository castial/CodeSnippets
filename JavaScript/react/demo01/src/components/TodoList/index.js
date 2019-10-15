import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {

    constructor() {
        super()

        this.handleTodoCompleteChanged = this.handleTodoCompleteChanged.bind(this);
    }

    handleTodoCompleteChanged(todo) {
        this.props.onTodoListChanged(todo);
    }

    render() {
        return (
            <ul>
                {
                    this.props.todoList.map(todo => {
                        return (
                            <TodoItem key={todo.id} todo={todo} onTodoCompleteChanged={this.handleTodoCompleteChanged}>
                            </TodoItem>
                        )
                    })
                }
            </ul>
        )
    }
}
