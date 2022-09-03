import React from 'react'
import Image from 'next/image'
import ChatGIF from "../assets/chat.gif";
import styles from "../styles/welcome.module.scss";
function Welcome({currentUser}) {
  return (
    <div className={styles.welcomeContainer}>
        <Image src={ChatGIF} width={500} height={500} alt="chat" />
        <h1>Welcome to Oshaberi</h1>
        <h3>Start chatting with your friends</h3>
    </div>
  )
}

export default Welcome