import "../styles/global.css";
import "../styles/main.scss";
import buildClient from "../api/buildClient";
import axios from "axios";
const AppComponent = ({ Component, pageProps, currentUser })=>{
    console.log(currentUser);
    return (<>
    <main>
    <Component {...pageProps} currentUser={currentUser} />
    </main>
    </>);
}

AppComponent.getInitialProps = async appContext => {
    try{
    const client = buildClient(appContext.ctx);
    let data = {};
    if(typeof window === 'undefined')
    {
        data = await client.get("api/currentuser");
    }
    else{
      const authUser = localStorage.getItem("chat-app-user");
      if(authUser)
      {
        data = await axios({
            method: "post",
            url: "http://localhost:4000/api/currentuser",
            data: {
              authUser: authUser
            },
            withCredentials: true
        });
      }
    }
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.data);
    }
    return {
      pageProps,
      currentUser: data.data
    };
  }catch(err)
  {
    return {
        pageProps: undefined,
        currentUser: undefined};
  }
}
export default AppComponent;