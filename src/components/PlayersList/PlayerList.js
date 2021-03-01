import React from 'react';

const PlayerList = (props) => {
   const name = props.playerList.name;
    const salary = props.playerList.salary;
    const image = props.playerList.image;
    const playerStyle ={border : '0px solid yellow',borderRadius :'10px',boxShadow:'7px 7px 6px 6px grey',
    margin :'10px',
    padding : '20px',
    }
    return (
        <div style ={playerStyle}>
            <img style={{height : '150px', padding:'10px'}} src={image} alt=""/>
            <h2 style ={{textAlign:'center'}}>{name}</h2>
            <h3 style ={{textAlign:'center'}}>salary: ${salary}</h3>
        </div>
    );
};

export default PlayerList;