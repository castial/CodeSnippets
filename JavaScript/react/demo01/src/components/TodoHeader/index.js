import React, { Component } from 'react'

export default class TodoHeader extends Component {

    constructor() {
        super();
        this.state = {
            title: '待办事项列表'
        }
    }
    
    render() {
        return (
            <h1>{this.state.title}</h1>
        )
    }
}
