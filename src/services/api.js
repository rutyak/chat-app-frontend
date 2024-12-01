import axios from "axios";

const API_URL = "http://localhost:8000";

export const sendMessage = async (message) => {

  console.log("message: ",message)
  try {
    const response = await axios.post(`${API_URL}/query`, { message });
    return response.data.reply;
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};
