import React, { Component } from 'react'
import { TodoHeader, TodoInput, TodoList, withFooter } from './components';

// @withFooter
class App extends Component {

    constructor() {
        super()

        this.state = {
            todoList: [
                {
                    id: 12,
                    content: '早上8点起床',
                    isCompleted: true
                },
                {
                    id: 13,
                    content: '中午不吃饭',
                    isCompleted: false
                }
            ]
        }

        this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
        this.handleTodoListChanged = this.handleTodoListChanged.bind(this);
    }

    handleSubmitTodo(content) {
        this.setState({
            todoList: this.state.todoList.concat([{
                id: Math.random(),
                content: content,
                isCompleted: false
            }])
        })
    }

    handleTodoListChanged(todo) {
        const todoList = this.state.todoList.map(t => {
            return {
                ...t,
                isCompleted: t.id === todo.id ? todo.isCompleted : t.isCompleted
            }
        })
        this.setState({
            todoList: todoList
        })
    }

    render() {
        return (
            <div>
                <TodoHeader></TodoHeader>
                <TodoInput onSubmitTodo={this.handleSubmitTodo}></TodoInput>
                <TodoList todoList={this.state.todoList} onTodoListChanged={this.handleTodoListChanged}></TodoList>
            </div>
        )
    }
}

export default App;