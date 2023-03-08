import React,{useState,useEffect} from 'react'
import axios from 'axios';


   const Get1=()=>{
    const[mydata,setMydata]=useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:8080/getpatient")
        .then((response)=>{
            console.log(response.data)
            setMydata(response.data)
        })
    });
   
    return ( 

        <div className="grid">
            <h1>All users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>AGE</th>
                        <th>MOVIENAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    mydata.map((data)=>{
                        return(
                           <tr key={data.id}>

                           <td>{data.id}</td>
                           <td>{data.username}</td>
                           <td>{data.age}</td>
                           <td>{data.moviename}</td>
                           </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
     );
}

export default Get1;