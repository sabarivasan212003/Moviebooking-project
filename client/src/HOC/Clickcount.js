import { SmartButtonOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import EnComponent from './hocex';
 class Clickcount extends Component {
//   constructor(props) {
//     super(props)
  
    state = {
       count:0
    }
//   }
  inc=()=>{
    this.setState(({count:this.state.count+1}))
  }
  
    render() {
    return (
      <div>
       <button onClick={this.inc}>Clickcount{this.state.count}{this.props.name}</button>
      </div>
    )
  }
}
export default EnComponent(Clickcount);
