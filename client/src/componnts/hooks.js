import React, { Component,useState } from 'react'

function Hooks() {
    const [state,setState]=useState(0);
    const [list,updateList]=useState(
        [
            {id:1,name:"sabari"},
            {id:2,name:"vasan"}
        ]
    );
    const update=()=>{
        let newname=document.getElementById("newname").value;
        updateList(ms=>[...list,{id:'${list.lngth+1}',name:newname}])
    }
    return ( 
        <>
       <ul>
        {list.map(ms=>(<li key={ms.id}>{ms.name}</li>))}
       </ul>
       <button onClick={update}>UPDATE</button>
       <input type="text" id="newname" placeholder="Enter name"></input>
        </>
     );
}

export default Hooks;
