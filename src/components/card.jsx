import * as React from "react";
import { Component } from "react";
class Card extends Component {
  
  render() {
    return (
      <div  style={{color:this.props.color}}>
        <h2>{this.props.cardValue}</h2>
        <h3>{this.props.suit}</h3>
        <h3>{this.props.suit}</h3>
        <h2>{this.props.cardValue}</h2>
      </div>
    );
  }
}

export default Card;
