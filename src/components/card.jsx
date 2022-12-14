import * as React from "react";
import { Component } from "react";
class Card extends Component {
  handleCardChange=(e)=>{
    this.props.onSelectedCardChange(e.target);
  }
  render() {
    return (
      <label className="col-sm-2 border rounded " htmlFor={this.props.id}>
        <div className="" style={{ color: this.props.color }}>
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
        <input id={this.props.id} onChange={this.handleCardChange} name="selectedCard" type={"radio"} />
      </label>
    );
  }
}

export default Card;
