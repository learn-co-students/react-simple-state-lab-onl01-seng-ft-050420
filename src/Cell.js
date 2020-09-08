
import React, { Component } from 'react';


export default class Cell extends Component {

    constructor(props) { //2 also pass in props here
        super()
        this.state = {
          color: props.value //1 to pass in props make SURE I passin the word props before value to make props.value
        }
      }

      clicked = () => {
        this.setState({
        color: '#333'
        })
      }

      render() {
          //debugger
        return (
            <div className = "cell"
               style={{backgroundColor: this.state.color}} // pass in this.state.color to get the state to add the color from the middle function
               onClick = {this.clicked}>
            </div>
        )}

}