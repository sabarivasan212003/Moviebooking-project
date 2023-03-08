import React, { useState } from 'react';
function UseStatus() {
    const[isOnline,setOnline]=useState(true);
    return isOnline;
}

export default UseStatus ;