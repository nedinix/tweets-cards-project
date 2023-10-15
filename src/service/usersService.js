import axios from 'axios';
import { PAGE_LIMIT } from './params';

axios.defaults.baseURL = 'https://64afa4aec60b8f941af45529.mockapi.io/api/';

export const fetchUsersList = async currentPage => {
  const options = {
    page: currentPage,
    limit: PAGE_LIMIT,
  };
  const response = await axios.get('users', {
    params: options,
  });
  return response;
};
