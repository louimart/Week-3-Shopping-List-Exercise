import axios from 'axios';

export const fetchGrocery = () => {
  // axios GET call
  return axios.get('/api/groceries');
};

export const postGrocery = (groceryData) => {
  return axios.post('/api/groceries', groceryData);
};

export const deleteGrocery = (groceryId) => {
  return axios.delete(`/api/groceries/${groceryId}`);
};
