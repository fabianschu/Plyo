import React, {useState} from 'react';
import axios from 'axios';

const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = event => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }

    const handleClick = event => {
        const credentials = { username, password };

        axios.post(`${process.env.endpoint}/auth/signup`, credentials)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <input type="text" value={username} onChange={handleChange} name="username"/>
            <input type="text" value={password} onChange={handleChange} name="password"/>
            <button onClick={handleClick}>Sign Up</button>
        </>
    )
}

export default Signup
