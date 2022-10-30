import React,{ useState } from "react";
import Cards from "./cards";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
function Players() {
  const [actions, setActions] = useState();
  const [playerName, setPlayerName] = useState();
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/coatgame/get_player_actions?id=${searchParams.get("id")}`)
          .then(response => {
            console.log()
            setActions(response.data.actions)
            setPlayerName(response.data.playerName)
          });
      }, []);
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="container">
      <div className="row">{playerName}</div>
      <div className="row">{actions}</div>
      <Cards id={searchParams.get("id")} />
    </div>
  );
}

export default Players;
