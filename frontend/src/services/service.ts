// src/apiService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; 

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data; // Assuming the API response contains content field
  } catch (error) {
    console.error('Error fetching post content:', error);
    throw error;
  }
};
