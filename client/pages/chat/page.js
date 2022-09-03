import React, {useEffect, useState, useRef} from 'react';
import styles from "../../styles/chatpage.module.scss";
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import Contacts from '../../components/Contacts';
import Welcome from '../../components/Welcome';
import ChatContainer from '../../components/ChatContainer';
import Link from 'next/link';
import {io} from "socket.io-client"
function Page({currentUser}) {
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const {doRequest, errors} = useRequest({
        url: "http://localhost:4000/api/getallusers",
        method: "get",
        onSuccess: (data) => {
            console.log(data);
            setContacts(data);
        }
    });
    const fetchContacts = async () => {
        if(currentUser.isProfileImageSet)
        {
            try {
                const response = await doRequest();
            } catch(e){
                console.log(e);
            }
        }
        else{
            Router.push("/chat/profile", null, {shallow: true});
        }
    }
    useEffect(()=>{
        if(currentUser)
        {
            socket.current = io("http://localhost:4000");
            socket.current.emit("add-user", currentUser.id);
        }
    })
    useEffect(() => {
        if(currentUser)
            fetchContacts();
    }, [])
    const handleChatChange = (chat)=>{
        setCurrentChat(chat);
    }
    return currentUser? (
        <div className={styles.chatContainer}>
            <div className={styles.container}>
            <Contacts contacts={contacts} currentUser={currentUser} changeChat = {handleChatChange}/>
            {currentChat === undefined?    <Welcome currentUser={currentUser}/> : <ChatContainer currentChat={currentChat} 
            currentUser={currentUser} socket={socket}/>}
            </div>
            {errors}
        </div>
    ):(
        <div className={styles.chatContainer}>
                <h1>Kindly Sign Up to continue <Link href="/auth/login">Login Page</Link></h1>
        </div>
    )
}

export default Page