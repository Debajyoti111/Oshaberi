import React,{useState, useEffect, useRef} from 'react'
import styles from "../styles/chatcontainer.module.scss";
import Image from 'next/image';
import DefaultAvatar from "../assets/defaultavatar.png";
import Logout from './Logout';
import ChatInput from './ChatInput';
import Messages from './Messages';
import axios from 'axios';


function ChatContainer({ currentChat, currentUser, socket }) {
    const [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();
    useEffect(()=>{
        const fetchMessages = async()=>{
            const response = await axios["post"]("http://localhost:4000/api/getmessages", {
                from: currentUser.id,
                to: currentChat.id
            }, {withCredentials: true});
            console.log(response.data);
            setMessages(response.data);
        }
        fetchMessages();
    }, [currentChat])
    const handleSendMessage = async (message)=>{
        console.log(message);
        const response = await axios["post"]("http://localhost:4000/api/addmessage", {
            text: message,
            from: currentUser.id,
            to: currentChat.id
        }, {withCredentials:true});
        console.log(response.data);
        socket.current.emit("send-msg", {
            to: currentChat.id,
            message: message
        });
        const msgs = [...messages];
        msgs.push({fromSelf:true, message: message});
        setMessages(msgs);
    }
    useEffect(()=>{
        if(socket.current)
        {
            socket.current.on("recieve-msg", (msg)=>{
                setArrivalMessage({fromSelf: false, message: msg});
            })
        }
    })

    useEffect(()=>{
        arrivalMessage && setMessages((prev)=>[...prev, arrivalMessage]);
        console.log(messages);
    }, [arrivalMessage])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages])
    return currentChat && (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>
                <div className={styles.userDetails}>
                    <div className={styles.avatar}>
                        <Image src={currentChat.profileImage ? `data:image/svg+xml;base64,${currentChat.profileImage}` :
                            DefaultAvatar} width={50} height={50} alt="avatar" />
                    </div>
                    <div className={styles.username}>
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>
                <Logout />
            </div>
            <div className={styles.chatMessages}>
                {
                    messages.map((message, index)=>{
                        return(
                            <div key={index}>
                                <div className={`${styles.message} ${message.fromSelf? styles.sended : styles.recieved}`}>
                                    <p className={styles.content}>
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ChatInput handleSendMessage={handleSendMessage} />
        </div>
    )
}

export default ChatContainer;