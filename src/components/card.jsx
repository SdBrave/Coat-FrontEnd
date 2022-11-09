import * as React from "react";
import { Component } from "react";
class Card extends Component {
  state={}
  handleCardChange=(e)=>{
    this.props.onSelectedCardChange(e.target);
  }
  isCha
  isInput=()=>{
if(this.props.isPlayCard){
 return <input id={this.props.id} onChange={this.handleCardChange} name="selectedCard" type={"radio"} />
}
  }
  render() {
    return (
      <label className="col-sm-1 " htmlFor={this.props.id}>
        <div className="card medium" style={{ color: this.props.color}}>
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
       {this.isInput()}
      </label>
    );
  }
}

export default Card;
