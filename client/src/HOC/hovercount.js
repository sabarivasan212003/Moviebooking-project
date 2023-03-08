import { SmartButtonOutlined } from '@mui/icons-material';
import React, { Component } from 'react'

 class Hovercount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  inc=()=>{
    this.setState(({count:this.state.count+1}))
  }
  
    render() {
    return (
      <div>
       <h1 onMouseEnter={this.inc}>Clickcount{this.state.count}</h1>
      </div>
    )
  }
}
export default Hovercount;
