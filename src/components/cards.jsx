import React, { Component } from "react";
import axios from "axios";
import Card from "./card";
class Cards extends Component {
  state = { response: "" };
  async getData() {
    const res = await axios(
      `http://127.0.0.1:8000/coatgame/get_player_cards/?id=${this.props.id}`
    );
    return res.data; // (Or whatever)
  }
  async componentDidMount() {
    this.getData().then((result) => {
      this.setState({ response: result });
    });
  }
  handleCardChange=(target)=>{
    console.log("Not again",target)
    this.props.onCardChange(target)
  }
  render() {
    const rows = [];
    for (let i = 0; i < this.state.response.length; i++) {
      var card = this.state.response[i];
      rows.push(
        <Card
          onSelectedCardChange={this.handleCardChange}
          key={i}
          id={card.id}
          cardValue={card.card_value}
          color={card.color}
          suit={card.suit}
        />
      );
    }
    return <div className="row bg-info bg-gradient">{rows}</div>;
  }
}

export default Cards;
