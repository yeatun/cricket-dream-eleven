import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Player = (props) => {
    
    const {name,salary,image} = props.player;
    const playerImageStyle ={height : '150px', padding:'10px'};
    const playerStyle ={border : '0px solid yellow',borderRadius :'10px',boxShadow:'7px 7px 6px 6px grey',
    margin :'10px',
    padding : '20px',
    
    }
    const buttonStyle ={
        paddingLeft:'15px'   
    }
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style ={playerStyle}>
            <img src={image} style ={playerImageStyle} alt=""/>
            <h4> {name}</h4>
            <p><b>salary : ${salary}</b></p>
            <button style={buttonStyle}  className='btn btn-success' onClick ={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faCheckCircle} /> Add Player</button>
        </div>
    );
};

export default Player;