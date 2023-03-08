import axios from 'axios';
import React, { Component } from 'react'
class  Fetch extends Component {
    state = { 
        email:[]
     } 
     componentDidMount(){
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response.data);
        })
     }
    render() { 
        return (
          <hq>Fetching Email Ids of Users</hq>   
        );
    }
}
 
export default Fetch;