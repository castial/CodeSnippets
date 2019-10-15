import React, { Component } from 'react'

export default class TodoItem extends Component {

    constructor() {
        super()

        this.handleTodoCompleteChanged = this.handleTodoCompleteChanged.bind(this);
    }

    handleTodoCompleteChanged(e) {
        this.props.onTodoCompleteChanged({
            id: this.props.todo.id,
            content: this.props.todo.content,
            isCompleted: e.target.checked
        })
    }

    render() {
        return (
            <li>
                <input type="checkbox" name={this.props.todo.content} value={this.props.todo.id} defaultChecked={this.props.todo.isCompleted} onChange={this.handleTodoCompleteChanged}>
                </input>
                <span>{this.props.todo.content}</span>
            </li>
        )
    }
}
