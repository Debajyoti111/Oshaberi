import React from 'react'
import useRequest from '../hooks/use-request';
import Router from 'next/router';
import { BiPowerOff } from "react-icons/bi";
import styles from "../styles/logout.module.scss";
function Logout() {
    const {doRequest, errors} = useRequest({
        url:"http://localhost:4000/api/signout",
        method:"post",
        onSuccess:()=>{
            localStorage.clear();
            Router.push("/", null, {shallow: false});
        }
    });
    const logout = async ()=>{
        try{
            const response = await doRequest();
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }
    return (
        <button className={styles.logoutButton}onClick={()=>{logout();}}>
            <BiPowerOff/>
        </button>
    )
}

export default Logout