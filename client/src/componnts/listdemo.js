import React, { Component } from 'react'
class Listdemo extends Component {
    state = { 
        names:["san","suganya","nayanthara","priyankamohan"]
     } 
    render() { 
        return (
            <ul>
                {this.state.names.map(he=><li key={he}>{he}</li>)}
            </ul>
        );
    }
}
 
export default Listdemo ;