import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Yoga from './fuction';
function Shank() {
    return (  
        <Router>
            <h1>Hello</h1>
            <Link to="/function">touch</Link>
            <Routes>
                <Route path="/function" element={<Yoga/>}/>
            </Routes>
        </Router>
    );
}

export default Shank;