import axios from 'axios';

export async function fetchData() {
  const response = await axios.get('http://localhost:3000/user/12');
  return response.data;
}