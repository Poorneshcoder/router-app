import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


const UserDetails = () => {

const [students, setStudents] = useState([]);

const {id} = useParams();
const history = useHistory();

useEffect(()=>{
const getUserDetails = async ()=> {
    const response = await fetch (`https://63f9eb78897af748dcc59d23.mockapi.io/students/${id}`,{
        method:"GET"
    });
    const data = await response.json();
    setStudents(data);
}
    getUserDetails();
})
    return(
        <div>
            <h1>user Details</h1>
            <div>
                <h1>Name : {students.name}</h1>
                <h3>city:{students.city} </h3>
                <h3>state:{students.state} </h3>
                <h3>salary:{students.expected} </h3>
            </div>
            <button
            onClick={()=>history.push('/')}
            >Back to home</button>
        </div>
    )
}

export default UserDetails;