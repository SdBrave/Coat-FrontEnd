import React, { Component } from "react";
import axios from "axios";
class Game extends Component {
  state = { gameData: "" };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/coatgame/get_game").then((result) => {
      this.setState({ gameData: result.data });
    });
  }
  render() {
    const links = [];
    if (this.state.gameData !== "") {
      var gameData = this.state.gameData;
      for (var i = 0; i < gameData.teams.length; i++) {
        console.log(gameData.teams[i])
        for (var j = 0; j < gameData.teams[i].players.length; j++) {
          var player = gameData.teams[i].players[j];
          console.log(player)
          links.push(<div><a target={"_blank"} href={`player?id=${player.id}`} >{player.player_name}</a></div>);
        }
      }
    }
    return <div>{links}</div>;
  }
}

export default Game;
