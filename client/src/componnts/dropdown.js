import React from 'react'
function Comp() {
    return ( 
        <div className="Container" style={{padding:200}}>
            <div className="Container" style={{padding:200,border:"2px solid black",backgroundColor:"lightblue"}}>
        <center>
        <label style={{paddingLeft:10}}>
            <h1>Select Names</h1>
            <div style={{paddingLeft:10}}>
            <select style={{width:300}}>
                <option value="Name">Names</option>
                <option value="Ayyappan">Ayyappan</option>
                <option value="Sunder">Sunder</option>
                <option value="Guhan">Guhan</option>
            </select>
            </div>
        </label>
        </center>
        </div>
        </div>
     );
}

export default Comp;