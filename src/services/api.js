import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://localhost:7128',
//   timeout: 10000,
// });

// Função para buscar dados da API
export const fetchData = async () => {
  try {
    const response = await axios.get('https://localhost:7128/Acoes'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};