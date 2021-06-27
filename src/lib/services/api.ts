import axios from 'axios';

export const baseURL = 'http://api.tbnb.test/api';

const api = axios.create({ baseURL });

export default api;
