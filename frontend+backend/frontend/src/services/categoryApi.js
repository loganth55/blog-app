import axios from "axios";

const apiUrl = "http://localhost:8000/api/category";

export const getAllCategory = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const createCategory = async (formData) => {
  const response = await axios.post(apiUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const editCategory = async(id,updateFormData)=>{
  const response = await axios.put(`${apiUrl}/${id}`,updateFormData,{
   headers: {
      "Content-Type": "multipart/form-data",
   }
  })
   return response.data
}

export const deleteCategory = async(id)=>{
  const response = await axios.delete(`${apiUrl}/${id}`);
  return response.data
}