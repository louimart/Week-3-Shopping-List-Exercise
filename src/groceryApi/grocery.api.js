import axios from 'axios';

export const fetchGrocery = () => {
  // axios GET call
  return axios.get('/api/groceries');
};

// POST - adds new grocery item
export const postGrocery = (groceryData) => {
  return axios.post('/api/groceries', groceryData);
};

// DELETE - removes clicked grocery item
export const deleteGrocery = (groceryId) => {
  return axios.delete(`/api/groceries/${groceryId}`);
};

// DELETE - removes all grocery items
export const globalDeleteGrocery = (groceryList) => {
  return axios.delete('/api/global', groceryList);
};

// PUT - Toggles Buy status True/False (PURCHASED/BUY)
export const updateBuyStatus = (groceryId) => {
  return axios.put(`/api/groceries/${groceryId}`);
};

// PUT - Reset all Buy status to False/Buy
export const resetGlobalBuyStatus = (groceryList) => {
  return axios.put('/api/global', groceryList);
};
