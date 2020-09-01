import React, { Component } from 'react';
import Matrix from './Matrix.js'

export default class Cell extends React.Component {
    
    constructor(props){
        super();
        this.state = {
            color: props.value}
    }

    render() {
        
        return (
            <div className="cell" onClick={this.handleClick} style={{backgroundColor: `${this.state.color}`}} ></div>
        )
    }

    handleClick = () => {
        const grey = '#333'
        this.setState({
            color: grey
        })
    }



}