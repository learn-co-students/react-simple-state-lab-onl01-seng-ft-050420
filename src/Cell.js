import React, {Component} from 'react'

class Cell extends Component {
    state = {color: this.props.value }

    render(){
        return <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}></div>
    };

    changeColor = (e) => {
        this.setState({color: '#333'})
    }


}

export default Cell