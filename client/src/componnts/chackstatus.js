import React, { useState,useEffect } from 'react'
import UseStatus from './useState';

function CheckStatus(props) {
    const isOnline=UseStatus(1);

    if(isOnline===null)
        return 'Loading...';
    return isOnline?'online':'offline';
    
}

export default CheckStatus;