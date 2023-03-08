import { useState, useEffect } from "react";
// import "../style/Main.css";
import axios from "axios";

const Get = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // using Promises
    useEffect(() => {
        axios
            .get("http://localhost:8080/getpatient")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);

    //plz subscribe to thapa technical
    return (
        <>
            {isError !== "" && <h2>{isError}</h2>}
              
            <div className="grid">
            <h1>All users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            
                            <th>Age</th>
                            <th>Moviename</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data, index) => {
                                return (
                                    <tr key={data.roll}>
                                        <td>{data.id}</td>
                                        <td>{data.username}</td>
                                        <td>{data.age}</td>
                                        <td>{data.moviename}</td>
                                       

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

    export default Get;