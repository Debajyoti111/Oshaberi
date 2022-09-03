import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import DefaultAvatar from "../assets/defaultavatar.png";
import styles from "../styles/contact.module.scss";
function Contacts({ contacts, currentUser, changeChat }) {
    const [selectedContact, setSelectedContact] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentUserName, setCurrentUserName] = useState(undefined);
    useEffect(() => {
        if (currentUser.isProfileImageSet) {
            setCurrentUserImage(currentUser.profileImage);
        }
        setCurrentUserName(currentUser.username);
        console.log(contacts);
    }, [currentUser]);
    const changeCurrentChat = (index, contact) => { 
        setSelectedContact(index);
        changeChat(contact);
    }
    return (
        currentUser && (
            <div className={styles.contactsContainer}>
                <div className={styles.contacts}>
                    {contacts.map((contact, index) => {
                        return currentUser.email !== contact.email ? (<div className={`${styles.contact} ${index === selectedContact ? styles.selected : ""}`} key={index}
                        onClick={()=>{changeCurrentChat(index, contact)}}>
                            <div className={styles.avatar}>
                                <Image src={contact.profileImage ? `data:image/svg+xml;base64,${contact.profileImage}`:
                                 DefaultAvatar} width={50} height={50} alt="avatar" />
                            </div>
                            <div className={styles.username}>
                                    <h3>
                                        {contact.username}
                                    </h3>
                            </div>
                        </div>) : null;
                    })}
                </div>
                <div className={styles.currentuser}>
                    <div className={styles.avatar}>
                        <Image src={`${currentUser.profileImage ? `data:image/svg+xml;base64,${currentUserImage}` :
                            `data:image/svg+xml;base64,${DefaultAvatar}`}`} width={50} height={50} alt="avatar" />
                    </div>
                    <div className={styles.username}>
                            <h1>
                                {currentUserName}
                            </h1>
                    </div>
                </div>
            </div>
        )
    )
}

export default Contacts