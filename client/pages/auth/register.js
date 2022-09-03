import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from "next/link";
import Logo from "../../assets/chat-logo.png";
import Image from "next/image"
import useRequest from "../../hooks/use-request";
import Router from "next/router";
import Login from './login';
const Register = ({currentUser}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const {doRequest, errors} = useRequest({
        url:"http://localhost:4000/api/signup", 
        body:{email, password, username},
        method:"post",
        onSuccess:(data)=>{
            if(data)
                localStorage.setItem("chat-app-user", data);
            if(!data.isProfileImageSet)
                Router.push("/chat/profile");
            else
                Router.push("/chat/page");
        }
    });
    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log("Submitting...");
        await doRequest();
    }
    return currentUser? (<>
        <div className='form-container'>
            <h1>You are already signed in. Please go to the <Link href="/chat/page">Chat Page</Link></h1>
        </div>
    </>):(
        <>
            <div className='form-container'>
                <form onSubmit={(event)=>{handleSubmit(event)}}>
                    <div className="brand">
                        <Image src={Logo} alt="brand-logo" height="50" width="50"/>
                        <h1 style={{color:"white"}}>Oshaberi</h1>
                    </div>
                    <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
                    <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                    <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                    <button type="submit">Register</button>
                </form>
                <span>
                    Already have an account? <Link href="/auth/login" target={Login}><a>Login</a></Link>
                </span>
                <span style={{backgroundColor:"red", borderRadius:"5%"}}>
                    {errors}
                </span>
            </div>
        </>
    )
}

export default Register;