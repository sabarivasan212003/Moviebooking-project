import {useState,useEffect} from 'react'
function Api() {
    const[user,setUser]=setStste([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res=>setUser(res))
    }
    )
    return (  
        <div>
    <ol>
    {user.map(u =><li>{u.name}</li>)}
    </ol>
</div>
    );
}

export default Api;