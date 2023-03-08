import axios from 'axios';
import React,{useState} from 'react'
function Del1() {
    const[id,setId]=useState();
    function dev(){
       axios
       .delete('http://localhost:8080/delpatient?id=' + id)
       .then((response)=>{
       console.log(response.data);
    })
    alert("user Deleted");
    }
    return ( 
        <div className='container'>
            <div className='row'>
             <label>
                DELETE USERS
             </label>
             <input type="text" placeholder='EnterID' value={id} onChange={(e)=>setId(e.target.value)}></input>
             </div>
             <div>
                <button type="button" className='btn btn-primary' onClick={dev}>SUBMIT</button>
             </div>
        </div>
     );
}

export default Del1;