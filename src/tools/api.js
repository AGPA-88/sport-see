import axios from 'axios';
import {Score, Activity, AverageSession, Performance} from '../models/kpi'

export async function fetchData(userId=12) {
  console.log(userId)
  const response = await axios.get('http://localhost:3000/user/' + userId);
  return response.data;
}
export async function fetchActivity(setActivity, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/activity');
  const sessions = response.data.data.sessions.map(session => {return new Activity(session.day, session.kilogram,session.calories)})
  setActivity(sessions)
}
export async function fetchSession(setAverageSession, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/average-sessions');
  console.log("🚀 ~ file: api.js:16 ~ fetchSession ~ response:", response)
  const averageSessions = response.data.data.sessions.map(session => {return new AverageSession(session.day, session.sessionLength)})

  console.log("🚀 ~ file: api.js:21 ~ fetchSession ~ averageSessions:", averageSessions)
  setAverageSession(averageSessions);
}
export async function fetchPerformance(userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/performance');
  return response.data;
}
// export async function fetchPerformance(setPerformance ,userId=12) {
//   const response = await axios.get('http://localhost:3000/user/' + userId + '/performance');
//   const performance = response.data.data.sessions.map(kind => {return new Performance(kind.value, kind.kind)})
//   setPerformance(performance)
// }

// function to fetch Scores
export async function fetchScores(setScores, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId);
  const score = response.data.data.todayScore ? response.data.data.todayScore : response.data.data.score;
  const baseScore = new Score(null, 100, '#FBFBFB', '#FBFBFB', '0');
  const todayScore= new Score(null, score*100,'#FF0000');
  setScores([baseScore, todayScore ]) ;
}

export async function fetchFirstName(setFirstName, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId);
  setFirstName(response.data.data.userInfos.firstName);
}
