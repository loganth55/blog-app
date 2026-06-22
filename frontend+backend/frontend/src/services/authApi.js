import axios from "axios";

const apiUrl = "http://localhost:8000/api/auth";

export const loginUser = async(userData)=>{
    const response = await axios.post(`${apiUrl}/login`,userData)
    return response.data

}

export const registerUser = async(userData)=>{
    const response = await axios.post(`${apiUrl}/register`,userData)
    return response.data
}