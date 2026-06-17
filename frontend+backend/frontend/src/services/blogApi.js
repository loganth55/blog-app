import axios from "axios";


const apiUrl = "http://localhost:8000/api/data";

export const getposts = async()=>{
 
    const response = await axios.get(apiUrl);
    return response.data

}

export const createposts =  async(data)=>{

    const response = await axios.post(apiUrl,data)
    return response.data
}

export const deletepost = async(id) =>{
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.id
}

export const getsinglepost = async(id) =>{
     const response = await axios.get(`${apiUrl}/${id}`);
     return response.data;
}

export const updatepost = async(id,data) => {
    const response = await axios.put(`${apiUrl}/${id}`,data)
    return response.data
}