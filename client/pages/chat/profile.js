import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Logo from "../../assets/chat-logo.png";
import Image from "next/image"
import useRequest from "../../hooks/use-request";
import Router from "next/router";
import Loader from "../../assets/loader.gif";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import styles from "../../styles/profile.module.scss";
import { Buffer } from 'buffer';

const Profile = ({currentUser})=>{
    const api = "https://api.multiavatar.com/45678945"
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[selectedAvatar, setSelectedAvatar] = useState(undefined);
    const {doRequest, errors} = useRequest({
        url:"http://localhost:4000/api/profile-update",
        method:"put",
        body:{
            imageUrl: avatars[selectedAvatar]
        },
        onSuccess:(data)=>{
            toast.success("Avatar updated successfully");
            Router.push("/chat/page", null, {shallow: true});
        }
    });
    const toastOptions = {
        position:"bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const setProfilePicture = async ()=>{
        if(selectedAvatar === undefined)
        {
            toast.error("Please select an avatar", toastOptions);
            return;
        }
        try
        {const response = await doRequest();
        console.log(response);
    }catch(e){
        console.log(e);
    }
    }

    const callApi = async ()=>{
        const data = [];
        for(let i = 0; i < 4; i++)
        {
            const image = await axios.get(`${api}/${Math.round(Math.random()*1000)}`);
            const buffer = new Buffer(image.data);
            data.push(buffer.toString("base64"));
        }
        setAvatars(data);
        setIsLoading(false);
    }
    useEffect(()=>{
        callApi();
    }, []);
    return(
        <>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1>Pick an avatar as your profile picture</h1>
                </div>
                {isLoading? (<Image src={Loader} alt="Loading"></Image>) : (
                    <>
                     <div className={styles.avatarContainer}>
                     {
                         avatars.map((avatar, index)=>{
                             return (
                                 <div key= {index} className= {`${styles.avatar} ${selectedAvatar === index ? `${styles.selected}`:""}`}>
                                     <Image src={`data:image/svg+xml;base64,${avatar}`} width={100} height={100} alt="avatar" onClick={(e)=>{
                                         setSelectedAvatar(index);
                                     }}/>
                                 </div>
 
                             )
                         })
                     }
                 </div>
                 <button className={styles.submitBtn} onClick={(e)=>{setProfilePicture();}}>Select As Profile Picture</button>
                </>)}
            </div>
            {errors}
            <ToastContainer/>
            Hello
        </>
    )
}

export default Profile;