import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    console.log("server");
    return axios.create({
      baseURL:
        "http://localhost:4000/",
      headers: req.headers,
      withCredentials: true
    });
  } else {
    // We must be on the browser
    console.log("Client");
    return axios.create({
      baseUrl: "/"
    });
  }
};

export default buildClient;
