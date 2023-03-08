import React, { Component } from 'react'
class Demo extends Component {
    state = { name:"hey",n:0 } 

    changeColor1(){
        let str="btn btn-";
        if(this.state.n===0){
            str+="danger";
        }
        else{
            str+="success";
        }
        return str;
    }
    changeColor2(){
        let str="btn btn-";
        if(this.state.n===10){
            str+="danger";
        }
        else{
            str+="success";
        }
        return str;
    }
    changeName(){
        if(this.state.n===0){
            return "Zero";
        }
        else if(this.state.n===10){
            return "Ten";
        }
        else{
            return this.state.n;
        }

    }
    
    render() { 
        return (
            <>
            <center>
            <button style={{width:70}}className={this.changeColor1()} disabled={this.state.n===10} onClick={()=>{this.setState({n:this.state.n+1})}} >+</button>
            <span style={{color:'red',paddingLeft:30}}>{this.changeName()}</span>
            <button style={{width:70,marginLeft:30}} className={this.changeColor2()} disabled={this.state.n===0} onClick={()=>{this.setState({n:this.state.n-1})}}>-</button>
            </center>
            </>
        );
    }
}
 
export default Demo;