import * as React from "react";
import { Component } from "react";
class Card extends Component {
  state = { suit: "\u2665", card: "A",color:"Red" };
  render() {
    return (
      <div  style={{color:this.state.color}}>
        <h2>{this.state.card}</h2>
        <h3>{this.state.suit}</h3>
        <h3>{this.state.suit}</h3>
        <h2>{this.state.card}</h2>
      </div>
    );
  }
}

export default Card;
