import React, { Component } from 'react';
import Matrix from './Matrix';

export default class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    updateColor = (event) => {
        this.setState({color: '#333'})
    }

    render(){
        return (<div className="cell" style={{backgroundColor: this.state.color}} onClick= {this.updateColor}>
            {this.state.color} 
        </div>)
    }
}