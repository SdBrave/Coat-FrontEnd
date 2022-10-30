import * as React from "react";
import { Component } from "react";
class Card extends Component {
  render() {
    return (
      <label className="col border rounded " htmlFor={this.props.id}>
        <div className="bg-info bg-gradient" style={{ color: this.props.color }}>
          <div>{this.props.cardValue}</div>
          <div>
            {this.props.suit}
            {this.props.suit}
          </div>
          <div>
            {this.props.suit}
            {this.props.suit}
          </div>
          <div>
            <div>{this.props.cardValue}</div>
          </div>
        </div>
        <input id={this.props.id} name="selectedCard" type={"radio"} />
      </label>
    );
  }
}

export default Card;
