import React, { Component } from 'react'
import './Styling/Styling.css'
import s from './Styling/Styling.module.css'

class Styling extends Component {
    state = {  } 
    render() { 
       
        return (
            <>
            <p className={s.k}>
                Hi guys
            </p>
            <p className={s.v}> 
                Welcome
            </p>
            </>
        );
    }
}
 
export default Styling ;