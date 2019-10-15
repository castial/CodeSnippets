import React, { Component } from 'react'

export default class TodoInput extends Component {

    constructor() {
        super()
        
        this.state = {
            inputValue: '',
            btnTitle: '提交'
        }
        
        this.handleInputValueChanged = this.handleInputValueChanged.bind(this);
        this.handleBtnSubmit = this.handleBtnSubmit.bind(this);
    }

    handleInputValueChanged(e) {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleBtnSubmit() {
        if (this.state.inputValue.length === 0) {
            return;
        }
        
        this.props.onSubmitTodo(this.state.inputValue);

        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInputValueChanged} value={this.state.inputValue}/>
                <button onClick={this.handleBtnSubmit}>{this.state.btnTitle}</button>
            </div>
        )
    }
}
