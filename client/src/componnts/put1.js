import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Put() {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [moviename, setMoviename] = useState('');
    const [myData, setMydata] = useState([]);
   const[error,setError]=useState('')
   useEffect(()=>{
           axios
           .get("http://localhost:8080/getpatient")
           .then((response)=>{
            console.log(response.data)
            setMydata(response.data)
           })
   })
    function create(e){
        const length = Object.keys(myData).length;
        e.preventDefault();
        let f=0;
        for(let i=0;i<length;i++){
              if(Number(id)===myData[i].id){
                f=1;
              
        try{
        const postData={
            id,
            username,
            age,
            moviename,
        };
        axios
        .put(
            "http://localhost:8080/putpatient",
            postData,
        )
        .catch((error)=>{
            setError(error)
            console.log(error)
        })
        alert("Details addes");
    }
    catch(err){
        alert("User registration failed");
    }
}
if(f===0){
    alert("ID does not exist");
}
else{

}
        }
    }
    return ( 
        <div className='container' style={{paddingTop:200}}>
            <div style={{border:"5px solid black",backgroundColor:"white",borderRadius:5,backgroundColor:"Lightblue"}}>
                <center>
                    <form>
            <div className='row' style={{padding:10,width:600}}>
                <label >Id</label>
                <input type="digit" placeholder='enterId' value={id} onChange={(event) => setId(event.target.value)}></input>
            </div>
            <div className='row' style={{padding:10,width:600}}>
                <label >Username</label>
                <input type="digit" placeholder='enterUsername' value={username} onChange={(event) => setUsername(event.target.value)}></input>
            </div>
            <div className='row' style={{padding:10,width:600}}>
                <label >Age</label>
                <input type="digit" placeholder='enterage' value={age} onChange={(event) => setAge(event.target.value)}></input>
            </div>
            <div className='row' style={{padding:10,width:600}}>
                <label >Moviename</label>
                <input type="digit" placeholder='entermoviename' value={moviename} onChange={(event) => setMoviename(event.target.value)}></input>
            </div>
            <div  style={{padding:10}}>
                <button className='btn-btn-primary' style={{backgroundColor:'lightblue'}} onClick={create}>SUBMIT</button>
            </div>
            </form>
            </center>
            </div>
        </div>
     );
}

export default Put;