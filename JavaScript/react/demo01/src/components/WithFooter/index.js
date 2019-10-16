import React, { Component } from 'react'

const withFooter = (CustomComponent) => {
    return class WithFooter extends Component {
        render() {
            return (
                <>
                    <CustomComponent></CustomComponent>
                    <h4>Design By Iafine</h4>
                </>
            )
        }
    }
}

export default withFooter;