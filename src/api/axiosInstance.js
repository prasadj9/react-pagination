import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://dummyjson.com",
    headers : {"Content-Type" : "appilcation/json"}
})

export default axiosInstance;