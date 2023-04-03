import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contact = () =>{
    const {id, token} = useParams();
    const [user, setUser] = useState([])

    useEffect(()=>{
        const getUserDetails = async ()=>{
            const response = await fetch(`https://63f9eb78897af748dcc59d23.mockapi.io/students/${id}`,{
                method:"GET"
            });
            const data = await response.json();
            setUser(data);
            console.log(user)
        }
        getUserDetails();
    },[id])
    return(
        <div>
            <h1>userDetails</h1>
            <h2>hi guys welcome to id is {id}</h2>
            <h2>this is the page is {token} </h2>
        </div>
    )
}

export default Contact;