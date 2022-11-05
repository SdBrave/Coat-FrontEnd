import React, { Component } from "react";
import axios from "axios";
class Game extends Component {
  state = { players: "" };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/coatgame/get_game").then((result) => {
      this.setState({ players: result.data });
    });
  }
  render() {
    const links = [];
    if (this.state.players !== "") {
      var players = this.state.players;
      
        for (var j = 0; j < players.length; j++) {
          var player = players[j]
          console.log(player)
          links.push(<div><a target={"_blank"} href={`player?id=${player.id}`} >{player.player_name}</a></div>);
        }
      }
    
    return <div>{links}</div>;
  }
}

export default Game;
