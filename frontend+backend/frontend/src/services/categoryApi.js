import axios from "axios";

const apiUrl = "http://localhost:8000/api/category";

export const getAllCategory = async () => {
  const response = await axios.get(apiUrl);
  return response.categoriesData;
};
