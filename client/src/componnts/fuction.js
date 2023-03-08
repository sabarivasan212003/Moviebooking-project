import React, { Component } from 'react'
import Smart from './child';
class Yoga extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h1>This is parent component</h1>
            <Smart gfg="green" col="blue"/>
            </div>
        );
    }
}
 
export default Yoga;