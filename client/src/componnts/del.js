import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Get from './get';
// import Find from './Find';
function Delete() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    const [mydata,setMydata]=useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:8080/getpatient")
        .then((response)=>{
         console.log(response.data)
         setMydata(response.data)
        })
})
    function del() {
        const length = Object.keys(mydata).length;
        let f=0;
        for(let i=0;i<length;i++){
               if(Number(id)===mydata[i].id){
                f=1;
               
        try{
        axios
            .delete('http://localhost:8080/delpatient?id=' + id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }

catch(err){
     alert("Registration faild");
}
               }
if(f==0){
    alert("ID not found");
}
else{

}
        }
    }
    
    return (
        <>     
            <center>
            <h2>Delete User</h2>
            <div>
                <input type="number" placeholder='Enter ID her' className="form-control1" value={id} onChange={(e) => setId(e.target.value)} style={{width:800}}>
                </input>
            </div>
            <div style={{padding:60}}>
            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
                </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Link to='/'>
                <button type="submit" class="btn btn-primary"
                >Back</button>
            </Link> */}
            <h2>
                {error}
            </h2>
            { <div className='Get'>

                <Get />
            </div> }
            </center>
        </>
    );
}

export default Delete;