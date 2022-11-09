import React, { Component } from 'react';
import Cards from './cards';
class Mat extends Component {
    state = {  } 
    render() { 
        return (<div><div className='row'>Mat Cards:</div>
        <Cards length={this.state.length} id={"MatCards"} className="container"/>
        </div>);
    }
}
 
export default Mat;