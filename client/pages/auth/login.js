import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Logo from "../../assets/chat-logo.png";
import Image from "next/image"
import useRequest from "../../hooks/use-request";
import Router from "next/router";
const Login = ({currentUser}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {doRequest, errors} = useRequest({
        url:"http://localhost:4000/api/signin", 
        body:{email, password},
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
    const handleChange = (event)=>{
        console.log(event.target.value);
    }
    return currentUser?(<>
        <div className='form-container'>
            <h1>You are already signed in. Please go to the <Link href="/chat/page">Chat Page</Link></h1>
        </div>
    </>):(<>
            <div className='form-container'>
                <form onSubmit={(event)=>{handleSubmit(event)}}>
                    <div className="brand">
                        <Image src={Logo} alt="brand-logo" height="50" width="50"/>
                        <h1 style={{color:"white"}}>Oshaberi</h1>
                    </div>
                    <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                    <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                    <button type="submit">Login</button>
                </form>
                <span>
                    Don't have an account? <Link href="/auth/register" getInitialProps={true}><a>Register Here</a></Link>
                </span>
                <span style={{backgroundColor:"red", borderRadius:"5%"}}>
                    {errors}
                </span>
            </div>
        </>)
}

export default Login;