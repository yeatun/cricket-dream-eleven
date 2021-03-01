import React from 'react';

const Cricketer = (props) => {
    const playerAdd = props.playerAdd;

    const totalSalary = playerAdd.reduce( (sum,element ) => sum + element.salary,0)
   
    return (
        <div>
            <h2>Total Budget : ${totalSalary} </h2> 
             
        </div>
    );
};

export default Cricketer;