import axios from "axios";

const API_KEY = "AIzaSyDXYabd1WxgDgfd7SIolk1glQzCur-8xXU";
const CX = "b473e3a90f0bf4076";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

export const fetchData = async (payload) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        cx: CX,
        ...payload,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
