import React from 'react'
import { Route, Link,Routes, BrowserRouter as Router } from 'react-router-dom'  
import Total from './total';
function Boot() {
    return ( 
        <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <div style={{padding:20}}>
        <Link to="/total">Movies</Link>  
        </div>
        </li>
        <li class="nav-item">
            <div style={{padding:20}}>
        <Link to="/Booking">Ticket</Link>  
        </div>
        </li>
        <li class="nav-item">
        <div style={{padding:20}}>
        <Link to="/Register">Signin</Link>  
        </div>
        </li>
        <li class="nav-item">
        <div style={{padding:20}}>
        <Link to="/Summa">Conact us</Link>  
        </div>
        </li>
        
      </ul>
      {/* <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />   */}
    </div>
    <Routes>
      <Route path="/total" component={<Total/>} />  
      </Routes>
  </div>
</nav>
</Router>


     );
}

export default Boot;