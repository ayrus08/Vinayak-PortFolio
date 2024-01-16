import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (error) {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
    console.log("first")
    console.error(error);
    throw error;
  }
  console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
};

//   export const fetchDataFromApi = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// };
