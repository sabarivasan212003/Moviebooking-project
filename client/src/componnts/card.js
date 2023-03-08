import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Booking from './Booking';
import Summa from './summa';
import Register from './registrationform';
import {Routes, Route, useNavigate,Link} from 'react-router-dom';
//import {Routes, Route, useNavigate} from 'react-router-dom';
import Success from './successfullticket';
import { MpSharp } from '@mui/icons-material';
import { flexbox } from '@mui/system';
//import {Redirect} from 'react-router-dom';
//import {Routes, Route, useNavigate} from 'react-router-dom';


export default  class Cards extends React.Component {
  
  render(){
    let Hello=()=>{
    alert('Welcome to LA Cinemas');
    
    
    }
       
     
      
    
    return (
    <>
    
<div style={{display:'inline-flex',padding:20,}}>
    <Card sx={{ width:250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={this.props.img}
      />
      
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          ImaikaNodigal
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          <h1>{this.props.id}</h1><br></br>
          <p>{this.props.name}</p>
          <p>IMDB:{this.props.imdb}/10</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/Register'>
      <Button variant="contained" onClick={Hello} >
  BOOK NOW
</Button>
</Link>
      </CardActions>
    </Card>
    </div>
  
   
  
    
    </>
  
    
  );
    }
}