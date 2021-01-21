const axios = require('axios');

export const upload = (file) => {
  const formData = new FormData();  
  const config = { 
    withCredentials: true
  };       
  formData.append("file", file);
  return axios.post('/api/upload', formData, config);
};