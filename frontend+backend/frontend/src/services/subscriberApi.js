import axios from "axios";

const apiUrl = "http://localhost:8000/api/subscriber";

export const getSubscriber = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const createSubscriber = async (data) => {
  const response = await axios.post(apiUrl, data);
  return response.data;
};

export const deleteSubscriber = async (id) => {
  const response = await axios.delete(`${apiUrl}/${id}`);
  return response.data;
};
