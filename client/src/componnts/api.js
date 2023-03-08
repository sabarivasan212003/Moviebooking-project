import { useEffect, useState } from "react"; 
export default function FetchAPI(){ 
const [user,setUser]=useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res=>setUser(res))
})
// console.log(user); 
return( 
<div>
    <ol>
    {user.map(u =><li>{u.name}</li>)}
    </ol>
</div>
)       
}


