import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Propsdemo from './propsdemo';
import Booking  from './Booking';
import {k} from './Booking';
 

export default function Success(props) {

  
  
  return (
    <>
    <center>
    <Card sx={{ width: 345,height:345}}>
      <CardMedia
        // component="img"
         height="140"
        // //image="/static/images/cards/contemplative-reptile.jpg"
        // alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
      
        <Typography variant="body2" color="text.secondary">
          
        <h3>Rate us on<h3>
          </h3> WWW.LA cinemas.com</h3>
          <h1>{k}</h1>
        </Typography>
      </CardContent>
      <CardActions>
        <center>
        
         <h3>Thankyou for Booking ticket</h3>
         <Button variant="contained"  >
  DOWNLOAD
</Button>
        </center>
      </CardActions>
    </Card>
    </center>
    </>
  );
}
