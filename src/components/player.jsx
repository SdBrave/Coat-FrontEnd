import React,{ useState } from "react";
import Cards from "./cards";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ActionForm from "./actionForm";
import Mat from "./mat";
function Players() {
  const [actions, setActions] = useState();
  const [playerName, setPlayerName] = useState();
  const [selectedCardId, setSelectedCardId] = useState("");
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/coatgame/get_player_actions?id=${searchParams.get("id")}`)
          .then(response => {
            console.log()
            setActions(response.data.actions)
            console.log(actions)
            setPlayerName(response.data.playerName)
          });
      }, []);
  let [searchParams, setSearchParams] = useSearchParams();
  const handleCardChange=(target)=>{
        console.log("you came here as well?",target.id)
        setSelectedCardId(target.id)
      }
  return (
    <div className="container">
      <div className="row">{playerName}</div>
      <div className="row">{actions}</div>
      <Cards onCardChange={handleCardChange} id={searchParams.get("id")} />
     {actions!==undefined? <ActionForm id={selectedCardId} purpose={actions} playerId={searchParams.get("id")}/>:<div/>}
     <div className="row">Mat Cards:</div>
     <div className="row"><Mat/></div>
    </div>
  );
}

export default Players;
