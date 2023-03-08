import { ErrorRounded } from '@mui/icons-material';
import { borderColor, style } from '@mui/system';
import React, { Component,useState } from 'react'
function CiaForm() {
    const initValues={username:'',email:'',password:''};
    const[formValues,setformValues]=useState(initValues);
    const[formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);


     const handleChange=(event) =>{
         const{id,value}=event.target;
         setformValues({...formValues,[id]:value})
         
     }
    const handleSubmit=(event)=>{
        event.preventDefault();
       setFormErrors( validate(formValues));
       
       setIsSubmit(true);
    }
   
    const validate=(values)=>{
        const errors={};
        
        const reg1= new RegExp("[a-z]");
        const reg2= new RegExp("[0-9]");
        const reg3= new RegExp("[A-Z]");
        const reg4= new RegExp("[!@#$&]");
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
        else if((reg1.test(values.password))&&(reg2.test(values.password) &&(reg3.test(values.password)) &&(reg4.test(values.password))))
             errors.password=<p style={{color:'green'}}>Password is VeryStrong </p>;
        else if(((reg1.test(values.password))&&(!reg2.test(values.password)) ||((!reg3.test(values.password)) &&(!reg4.test(values.password)))||((!reg1.test(values.password)) &&(!reg3.test(values.password)))||((!reg1.test(values.password)) &&(!reg3.test(values.password)))||((!reg2.test(values.password)) &&(!reg3.test(values.password)))))
        
              errors.password=<p style={{color:'red'}}>Password is weak </p>;
         else if((reg1.test(values.password))&&(reg2.test(values.password) &(!reg3.test(values.password)) &(!reg4.test(values.password))))

              errors.password=<p style={{color:'orange'}}>password is Good</p>;
         else if((reg1.test(values.password))&&(reg2.test(values.password) &&(reg3.test(values.password)) &(!reg4.test(values.password))))

              errors.password=<p style={{color:'lightgreen'}}>password is Strong</p>;
        
        // else if(values.password.length<4)
        //        errors.password="password is below 4 character";
                return errors;
    }
    return ( 
        <div className='container' style={{paddingTop:200}}>
            {/* <pre>{JSON.stringify(formValues,undefined,3)}</pre> */}
            <div style={{border:'5px sold black',backgroundColor:"white",borderRadius:5}}>
            <center>
            <h1>Dynamic form</h1>
            <form>
        
            <div className='row' style={{padding:10,width:800}}>
                <label>Username</label>
                <input type="text" id="username" placeholder='Type usename here' value={formValues.username} onChange={handleChange} onMouseLeave={handleSubmit}/> 
            </div>
            <p style={{color:"red"}}>{formErrors.username}</p>
            <div className='row' style={{padding:10,width:800}}>
                <label>Email</label>
                <input type="email" id="email" placeholder='Type emailid  here' value={formValues.email} onChange={handleChange} onMouseLeave={handleSubmit}/> 
            
            </div>
            <p style={{color:"red"}}>{formErrors.email}</p>
            <div className='row' style={{padding:10,width:800}}>
                <label>Password</label>
                <input type="password" id="password" placeholder='Type password  here' value={formValues.password} onChange={handleChange}  onMouseLeave={handleSubmit} /> 
            
            </div>
            {/* <div className='row' style={{padding:20,width:800}}>
                <button className='btn btn-primary'>Login</button>
                
            </div> */}
            <p style={{color:"red"}}>{formErrors.password}</p>
        </form>
        </center>
        </div>
        </div>
     );
}

export default CiaForm;