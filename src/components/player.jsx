import React,{ useState } from "react";
import Cards from "./cards";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ActionForm from "./actionForm";
import Mat from "./mat";
import Navbar from "./navbar";
function Players() {
  const [actions, setActions] = useState();
  const [playerName, setPlayerName] = useState();
  const [selectedCardId, setSelectedCardId] = useState("");
  const [points, setPoints] = useState("");
  const [trumpSuit,setTrumpSuit]=useState();
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/coatgame/get_player_actions?id=${searchParams.get("id")}`)
          .then(response => {
            console.log()
            setActions(response.data.actions)
            setTrumpSuit(response.data.trump_card)
            setPlayerName(response.data.playerName)
            setPoints(response.data.points)
          });
      }, []);
  let [searchParams, setSearchParams] = useSearchParams();
  const handleCardChange=(target)=>{
        console.log("you came here as well?",target.id)
        setSelectedCardId(target.id)
      }
  return (
    <div >
      <Navbar trumpSuit={trumpSuit} points={points} playerName={playerName} actions={actions}/>
      <div className="container">
        <br/>
        
      <Cards onCardChange={handleCardChange} id={searchParams.get("id")} />
     {actions!==undefined? <ActionForm id={selectedCardId} purpose={actions} playerId={searchParams.get("id")}/>:<div/>}
     <br/>
     <div className="row"><Mat/></div>
     </div>
    </div>
  );
}

export default Players;
