import axios from 'axios';

export const baseURL = 'https://product-tbnb.herokuapp.com/api';

const api = axios.create({ baseURL });

export default api;
