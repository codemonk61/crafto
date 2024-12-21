// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://assignment.stage.crafto.app';
const MEDIA_UPLOAD_URL = 'https://crafto.app/crafto/v1.0/media/assignment/upload';

export const login = async (username, otp) => {
  const { data } = await axios.post(`${API_BASE_URL}/login`, { username, otp });
  return data;
};

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await axios.post(MEDIA_UPLOAD_URL, formData);
  return data;
};

export const createQuote = async (token, text, mediaUrl) => {
  const { data } = await axios.post(
    `${API_BASE_URL}/postQuote`,
    { text, mediaUrl },
    { headers: { Authorization: token } }
  );
  return data;
};

export const getQuotes = async (token, limit = 10, offset = 0) => {
  const  data  = await axios.get(`${API_BASE_URL}/getQuotes?limit=${limit}&offset=${offset}`, {
    headers: { Authorization: token },
  });
  console.log(data)
  const sliceData = data.data.data
 

  return sliceData;
};
