import React,{useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Booking from './Booking';
function Post() {
    
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [moviename, setMoviename] = useState('');
    const [mydata, setMydata] = useState([]);
   const[error,setError]=useState('')
   
    function create(e){
        e.preventDefault();
        const postData={
            id,
            username,
            age,
            moviename,
        };
        axios
        .post(
            "http://localhost:8080/postpatient",
            postData,
        )
        .then((response) =>{
            console.log(response.data);
            setMydata(response.data)
        }).catch((error)=>{
            setError(error)
            console.log(error)
        })
        alert("Details addes");
    }
    return ( 
        <div className='container' style={{paddingTop:200}}>
            <div style={{border:"5px solid black",backgroundColor:"white",borderRadius:5,backgroundColor:"Lightblue"}}>
                <center>
                    <form>
            <div className='row' style={{padding:10,width:600}}>
                <label >Id</label>
                <input type="digit" placeholder='enterId' value={id} onChange={(event) => setId(event.target.value)}></input>
            </div>
            <div className='row' style={{padding:10,width:600}}>
                <label >Username</label>
                <input type="digit" placeholder='enterUsername' value={username} onChange={(event) => setUsername(event.target.value)}></input>
            </div>
            <div className='row' style={{padding:10,width:600}}>
                <label >Age</label>
                <input type="digit" placeholder='enterage' value={age} onChange={(event) => setAge(event.target.value)}></input>
            </div>
            <div className='row' style={{padding:10,width:600}}>
                <label >Moviename</label>
                <input type="digit" placeholder='entermoviename' value={moviename} onChange={(event) => setMoviename(event.target.value)}></input>
            </div>
            <Link to="/Booking">
            <div  style={{padding:10}}>
                <button className='btn-btn-primary' style={{backgroundColor:'lightblue'}} onClick={create}>SUBMIT</button>
            </div>
            </Link>
            <p id="o">0</p>
            </form>
            </center>
            </div>
        </div>
     );
}

export default Post;