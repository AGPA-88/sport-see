import axios from 'axios';

export async function fetchData(userId) {
  console.log(userId)
  const response = await axios.get('http://localhost:3000/user/' + userId);
  return response.data;
}
export async function fetchActivity(userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/activity');
  return response.data;
}
export async function fetchSession(userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/average-sessions');
  return response.data;
}
export async function fetchPerformance(userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/performance');
  return response.data;
}