import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Summa() {
  return (
    <div style={{paddingLeft:550,paddingTop:150}} >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      />
      <center><h2>Contact Us
</h2></center>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h2></h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <h2>We’re all ears.</h2>
       <p>Please choose a topic below related to your inquiry:</p>
       <p><ul><li>Help & Support</li></ul></p>
       <p><ul><li>Email enquiries: contact@LA cinemas.ac.in</li></ul></p>
       <p><ul><li>Our address:LA cinemas,Trichy-28</li></ul></p>
      
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
