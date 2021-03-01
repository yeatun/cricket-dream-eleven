import './App.css';
import { useEffect, useState } from 'react';
import playersListData from './Data/data.json';
import Player from './components/Player/Player';
import Cricketer from './components/Cricketer/Cricketer';
import PlayerList from './components/PlayersList/PlayerList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [players,setPlayers] = useState([]);
  const [playerAdd,setPlayerAdd ] = useState([]);
  const [playerList,setPlayerList] = useState([]);
  
  useEffect(() =>{
    setPlayers(playersListData)
    
  },[])

  const handleAddPlayer =(players) => {
    const newPlayerAdd = [...playerAdd,players];
    setPlayerAdd(newPlayerAdd);
    const newPlayerList = [...playerList,players];
    setPlayerList(newPlayerList);
    
  }
  return (
    <div className="App"className="App-header">
      <header >
      <h1>Total Player :{players.length}</h1>
      <h4>Selected Player : {playerAdd.length}</h4>
      <Cricketer  playerAdd= {playerAdd}   ></Cricketer>
      </header>
     <div  className ="card-deck col-sm" style={{padding: '100px',paddingLeft:'200px'}}>
     {
     
     playerList.map(playerList =><PlayerList playerList ={playerList} handleAddPlayer={handleAddPlayer} ></PlayerList>)
     
     }
       
     </div> 
      
     
      <div className ="totalPlayer" style={{ columnCount: '3',padding: '100px'}}>
      {
        players.map(player => <Player  player ={player} handleAddPlayer={handleAddPlayer} key ={player.id}></Player>)
      }
      </div></div>
     
     
  );
}

export default App;
