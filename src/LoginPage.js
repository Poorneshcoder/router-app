import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=> {
        const getUserList = async () => {
            const response = await fetch("https://642c15f2d7081590f931d433.mockapi.io/userlist",{
                method:"GET",
            });
            const data = await response.json();
            setDatas(data);
        }
        getUserList();
    },[]);

    // login functionality

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(datas);
        const check = datas.find(elm => elm.name === name && elm.password === password);
        if(!check){
            setError("Sorry you have entered incorrect credientials")
        } else {
            setError("");
            localStorage.setItem("user-name", name);
            history.push("/home");
        }
    }

    return (
        <div>
            <div className='login-page'>
                <form onSubmit={handleLogin}>
            <input 
                placeholder="Name"
                type="text"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                />
                <input 
                placeholder="Password"
                type="text"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />
                <button type="submit">Login</button>
                </form>
            </div>
            {error && <div className="error-field"><h2>{error}</h2></div>}
            <h1>name :{name} </h1>
            <h1>pass :{password} </h1>

            <h2>If not registered please signup</h2>
            <button
                onClick={() => history.push("/register")}
            >Singup</button>
        </div>
    )
}

export default LoginPage;