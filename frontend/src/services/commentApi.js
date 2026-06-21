import axios from "axios"

const apiUrl = "http://localhost:8000/api/comment";

export const getComment = async()=>{
    const response = await axios.get(apiUrl)
    return response.data
}

export const createComment = async(data)=>{
    const  response = await axios.post(apiUrl,data)
    (apiUrl,data)
    return response.data
}

export const deleteComment = async(id)=>{
    const response = await axios.delete(`${apiUrl}/${id}`)
    return response.data;
}