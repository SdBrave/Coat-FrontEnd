import React,{ useState } from "react";
import Cards from "./cards";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ActionForm from "./actionForm";
function Players() {
  const [actions, setActions] = useState();
  const [playerName, setPlayerName] = useState();
  const [selectedCardId, setSelectedCardId] = useState(0);
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/coatgame/get_player_actions?id=${searchParams.get("id")}`)
          .then(response => {
            console.log()
            setActions(response.data.actions)
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
      <ActionForm id={selectedCardId}/>
    </div>
  );
}

export default Players;
