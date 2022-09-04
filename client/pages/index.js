import React from "react";
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/chat-logo2.png";
import ChatGIF from "../assets/chat.gif";
const LandingPage =  ({currentUser})=>{
    return (<>
    <div className = {styles.homeContainer}>
        <div className={styles.homeBrand}>
            <div> 
                <div className={styles.homeImage}>
                    <Image src={Logo} alt="Chat App Logo" width={115} height={115}/>
                </div>
                <h1>Welcome to Oshaberi</h1> 
                <h2>Chat With Your Friends and Family</h2>
            </div>
        </div>
        <div className={styles.homeLinks}>
            <div className={styles.signUpLink}>
            <div className={styles.circle}></div>
                <div className={styles.homeImage}>
                    <Image src={ChatGIF} alt="Chat App Logo" width={225} height={225}/>
                </div>
                <h2 className={styles.content}>
                    Click The Button Below to
                </h2>
                {currentUser? (<Link href="/chat/page">
                    <a><h2 className={styles.link}>Chat With Your Friends</h2></a>
                </Link>):(<Link href="/auth/register">
                    <a><h2 className={styles.link}>Register</h2></a>
                </Link>)}
            </div>
        </div>
    </div>
    </>)
}

export default LandingPage;