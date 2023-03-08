import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState ,useEffect,Link} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// import '../style/Main.css'
export default function SimpleContainer() {
    const[id,setId]=useState('');
    const[username,setUsername]=useState("");
    const[age,setAge]=useState();
    const[moviename,setMoviename]=useState("");
   
    const[department,setDepartment]=useState();
    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/postpatient",
                {
                   
                    id: id,
                    username:username,
                    age: age,
                    moviename: moviename
                

                });
            alert("Student Registation Successfully");
            setId("");
            setUsername();
            setAge();
            setMoviename("");


        }
        catch (err) {
            alert("User Registation Failed");
        }
    }
    
    return (
        <div>
          <h2>Registation Form</h2>
            <form id="login-form">
                <label for="username">ID</label>
                <input type="text" id="username" name="username" required value={id} onChange={(event) => {
                    setId(event.target.value);
                }} />
                <br/>
                        <label for="password">USERNAME</label>
                <input type="text" id="password" name="password" required value={username} onChange={(event) => {
                    setUsername(event.target.value);
                }} />
                <label for="username">AGE</label>
                <input type="text" id="username" name="username" required value={age} onChange={(event) => {
                    setAge(event.target.value);
                }} />
                <label for="username">MOVIENAME:</label>
                <input type="text" id="username" name="username" required value={moviename} onChange={(event) => {
                    setMoviename(event.target.value);
                }} />
                
                <Link to='/Booking'>
                <button type="submit" class="btn btn-primary" onClick={save}>Submit</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Link to='/Main'>
                    <button type="submit" class="btn btn-primary">Back</button></Link> */}
                            </form>

        </div>
    );
}