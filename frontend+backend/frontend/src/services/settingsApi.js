import axios from "axios";

const apiUrl = "http://localhost:8000/api/settings";

export const getSettings = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const createSettings = async (formData) => {
  const response = await axios.post(apiUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const editSettings = async (id, updateFormData) => {
  const response = await axios.put(`${apiUrl}/${id}`, updateFormData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
