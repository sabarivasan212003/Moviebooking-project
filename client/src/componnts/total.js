import { Card, skeletonClasses } from '@mui/material';
import React, { Component } from 'react'
import Cards from './card';
import img0 from '../assests/imaika.jpeg'
import img1 from '../assests/remo.jpg'
import img2 from '../assests/images.jpeg'
import img3 from '../assests/sk.jpeg'
import img4 from '../assests/reptile.jpg'
import img5 from '../assests/superdelux.jpg'
import img6 from '../assests/lovetoday.webp'
import img7 from '../assests/master.jpg'
import img8 from '../assests/ps1.jpg'
import img9 from '../assests/vikram.jpg'
import img10 from '../assests/hanghover.jpg'
import img11 from '../assests/sershah.jpg'

class Total extends Component {
    state = {msg:[{img:img0,id:1,name:"IMAIKA NODIGAL",imdb:8.2},
                 {img:img1,id:2,name:"REMO",imdb:8.9},
                 {img:img2,id:3,name:"KANITHAN",imdb:8.9},
                 {img:img4,id:4,name:"REPTILE",imdb:8.5},
                 {img:img5,id:5,name:"SUPERDELUX",imdb:9.1}, 
                 {img:img6,id:6,name:"LOVETODAY",imdb:9.8} , 
                 {img:img7,id:7,name:"MASTER",imdb:9.5}  ,
                 {img:img8,id:8,name:"PONNIYAN SELVAN",imdb:9.9}  ,
                 {img:img9,id:9,name:"VIKRAM",imdb:10}  ,
                 {img:img11,id:10,name:"SERSHAH",imdb:9.1} ]  } 
    render() { 
        return (
           this.state.msg.map(ms=><Cards img={ms.img} id={ms.id} name={ms.name} imdb={ms.imdb}/>)
        );
    }
}
 
export default Total;