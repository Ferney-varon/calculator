import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/calculator';

export const calculatorApi = {
  add: async (a: number, b: number) => {
    const response = await axios.post(`${API_BASE_URL}/add`, { a, b });
    return response.data;
  },
  subtract: async (a: number, b: number) => {
    const response = await axios.post(`${API_BASE_URL}/subtract`, { a, b });
    return response.data;
  },
  multiply: async (a: number, b: number) => {
    const response = await axios.post(`${API_BASE_URL}/multiply`, { a, b });
    return response.data;
  },
  divide: async (a: number, b: number) => {
    const response = await axios.post(`${API_BASE_URL}/divide`, { a, b });
    return response.data;
  },
  exponentiate: async (a: number, b: number) => {
    const response = await axios.post(`${API_BASE_URL}/exponentiate`, { a, b });
    return response.data;
  },
  sqrt: async (a: number) => {
    const response = await axios.post(`${API_BASE_URL}/sqrt`, { a });
    return response.data;
  },
  percentage: async (a: number) => {
    const response = await axios.post(`${API_BASE_URL}/percentage`, { a });
    return response.data;
  }
};
