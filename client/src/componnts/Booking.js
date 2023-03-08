import React, { useState,Component } from 'react'
import Hooks from './hooks';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Success from './successfullticket';
import sounder from './summa';
//import Total from './total';
import Cards from './card';
import Forms from './form';
//import Listdemo from './listdemo';
import 'bootstrap/dist/css/bootstrap.css';
var k;
function Booking (props) {
    const navigate=useNavigate();

    const Book=()=>{
    
        const name=document.getElementById('a').value;
        const k=String(name);
        alert(k+" Tickets booked succesfully");
         navigate('/Success');
         
    }
    
    return ( 
        <>
        <center>
            <div style={{paddingTop:250}} id="su">
                <h1>WELCOME TO LA CINEMAS</h1><br></br>
                
         <input type="text"  placeholder="Enter the ticket" id='a' required></input>
        <button style={{paddingLeft:20}} onClick={Book}>SUBMIT</button> 
        
        
        </div>
        </center>

</>
     );
    }
export var k;
export default Booking;
//export  const kill=s;
//export const num=document.getElementById('a').value;