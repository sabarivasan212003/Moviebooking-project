import { EnergySavingsLeafTwoTone } from '@mui/icons-material';
import React, { Component } from 'react'
class Formsubmission extends Component {
    constructor(props){
        super(props);
        this.state = { 
            FirstName:''
         } 
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange=event=>
    {
        this.state.FirstName=event.targer.value;
    }
    handleSubmit=(event)=>
    {
        event.preventDefault();
        window.alert('your name is');
    }
    
    render() { 
        return (
            <center>
            <div>
                <h1>Form Handling</h1>
                <form action="" method="GET" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" id="firstname" placeholder='type firse name here' value={this.FirstName} onChange={(event)=>this.handleChange(event)} />

                    </div>
                    <div>
                        <input type="submit" value="SUBMIT" name="submit"></input>
                    </div>
                </form>
            </div>
            </center>
        );
    }
}
 
export default Formsubmission;