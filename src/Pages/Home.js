import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () =>{
    const [students, setStudents] = useState([]);
    const [userName, setUserName] = useState("");
    const history = useHistory();
    useEffect(()=>{
        const getUserDetails = async ()=>{
            const response = await fetch("https://63f9eb78897af748dcc59d23.mockapi.io/students",{
                method:"GET"
            });
            const data = await response.json();
            setUserName(localStorage.getItem("user-name"))
            setStudents(data);
        }
        // authentication of your application....
        if(!localStorage.getItem("user-name")){
            history.replace("/");
        }
        getUserDetails();

        // localStorage.getItem("user-name") ? getUserDetails() : history.replace("/");
        
    },[])

    const handleLogout = () => {
        localStorage.removeItem("user-name");
        history.push("/");
    }
    return(
        <div>
            <h1>Router App</h1>
            <h3>Welcome back {userName} </h3>
            <button
            onClick={handleLogout}
            >Logout</button>
            {students.map((stud, idx)=>
                <div key={idx}>
                    <h1>{stud.name}</h1>
                    <button onClick={()=>history.push(`/user/${stud.id}/${stud.name}`)}
                    >Details</button>
                </div>
            )};
        </div>
    )
}

export default Home;