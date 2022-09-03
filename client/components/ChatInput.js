import React, { useState, useEffect } from 'react'
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import styles from "../styles/chatinput.module.scss";
import dynamic from "next/dynamic";
function ChatInput({handleSendMessage}) {
    const emojiStyle = {
        position: "absolute",
        top: "-350px",
        backgroundColor: "#080420",
        boxShadow: "0 5px 10px #A10035",
        borderColor: "#600020"
        
      }
      
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState("");

    const DynamicEmojiPicker = dynamic(()=>import("emoji-picker-react"), {ssr: false});
    const {SKIN_TONE_MEDIUM_DARK} = dynamic(()=>import("emoji-picker-react"), {ssr: false});

    const handleEmojiPickerHideShow = ()=>{
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (event, emojiObject)=>{
        setMessage(message + emojiObject.emoji);
    }

    const sendChat = (event)=>{
        event.preventDefault();
        if(message.length > 0)
        {
            handleSendMessage(message);
            setMessage("");
        }
    }
    return (
        <div className={styles.chatInput}>
            <div className={styles.buttonContainer}>
                <div className={styles.emoji}>
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
                    {
                        showEmojiPicker && 
                        <DynamicEmojiPicker pickerStyle={emojiStyle} onEmojiClick={handleEmojiClick}/>}
                </div>
            </div>
            <form className={styles.inputContainer} onSubmit={(e)=>{sendChat(e)}}>
                <input type="text" placeholder="Type message here" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                <button className={styles.submit}>
                    <IoMdSend />
                </button>
            </form>
        </div>
    )
}

export default ChatInput