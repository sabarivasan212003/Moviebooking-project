import React,{useState} from 'react'
import {Routes, Route, useNavigate,Link} from 'react-router-dom';
import Button from '@mui/material/Button';

function Register() {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [moviename, setMoviename] = useState('');
   
    const save = (e) => {
        e.preventDefault();
       
        const obj = {
            id,username,age,moviename
        }
        fetch("http://localhost:8080/postpatient",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(obj)}).then(console.log("New Patient Added"));
        alert("Details added");
    }
    
    
    
  
  
    return ( 
        <div className='container' style={{paddingTop:200}}>
                
        <div style={{border:'5px sold black',backgroundColor:"white",borderRadius:5,backgroundColor:"Lightblue"}}>
        <center>
        <h1>Registration form</h1>
        <form>
    
        <div className='row' style={{padding:10,width:800}}>
            <label>ID</label>
            <input type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder='Type id here'/> 
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>USERNAME</label>
            <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} placeholder='Type username  here'/> 
        
        </div>
       
        <div className='row' style={{padding:10,width:800}}>
            <label>AGE</label>
            <input type="text"  value={age} onChange={(event) => setAge(event.target.value)} placeholder='Type age  here' /> 
        
        </div>
        <div className='row' style={{padding:10,width:800}}>
            <label>MOVIENAME</label>
            <input type="text"  value={moviename} onChange={(event) => setMoviename(event.target.value)} placeholder='Type moviename  here' /> 
           
        </div>
            {/* <Link to="/Booking">
            <button className='btn btn-primary' onClick={save}>Register</button>
            </Link> */}
            <Link to='/Get'>
      <Button variant="contained" onClick={save} >
  Register
</Button>
</Link>
        
        
    </form>
    </center>
    </div>
    </div>
       
        
     
            
    
    
     );
}

export default Register;
