import React, { Component,useState } from 'react'
function Validform() {
    const initValues={username:'',email:'',password:''};
    const[formValues,setformValues]=useState(initValues);
    const[formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);


    const handleChange=(event) =>{
        const{id,value}=event.target;
        setformValues({...formValues,[id]:value})
        console.log(formValues);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
       setFormErrors( validate(formValues));
       setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]");
        if(!values.username)
             errors.username="username is empty";
        else if(values.username.length<5)
               errors.username="username is below 5 character";
               
        else if(!values.email)
             errors.email="email is required";
        else if(values.email.length<5)
               errors.username="username is below 5 character";
        else if(!values.password)
             errors.email="password is required";
        else if(values.email.password<5)
               errors.username="username is below 5 character";
               return errors;
    }
    return ( 
        <div className='container' style={{paddingTop:200}}>
            <pre>{JSON.stringify(formValues,undefined,3)}</pre>
            <center>
            <form onSubmit={handleSubmit}>
        
            <h1>User Registration form</h1>
            <div className='row'>
                <label>Username</label>
                <input type="text" id="username" placeholder='Type usename here' value={formValues.username} onChange={handleChange}/> 
            </div>
            <p style={{color:"red"}}>{formErrors.username}</p>
            <div className='row'>
                <label>Email</label>
                <input type="email" id="email" placeholder='Type emailid  here' value={formValues.email} onChange={handleChange}/> 
            
            </div>
            <p style={{color:"red"}}>{formErrors.email}</p>
            <div className='row'>
                <label>Password</label>
                <input type="password" id="password" placeholder='Type password  here' value={formValues.password} onChange={handleChange}/> 
            
            </div>
            <p style={{color:"red"}}>{formErrors.email}</p>
            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            
            </div>
        </form>
        </center>
        </div>
     );
}

export default Validform;