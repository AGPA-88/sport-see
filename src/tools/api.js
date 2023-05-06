import axios from 'axios';
import {Score, Activity, AverageSession, Performance} from '../models/kpi'

/**
Retrieves data for a specific user from the server
@async
@function
@param {number} [userId=12] - The ID of the user to retrieve data for
@returns {Promise} - A Promise object that resolves to the user data retrieved from the server
*/
export async function fetchData(userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId);
  return response.data;
}


/**
Retrieves activity data for a specific user from the server and sets it in state
@async
@function
@param {function} setActivity - A function that sets the activity data in state
@param {number} [userId=12] - The ID of the user to retrieve data for
@returns {Promise} - A Promise object that resolves to the activity data retrieved from the server and sets it in state
*/
export async function fetchActivity(setActivity, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/activity');
  const sessions = response.data.data.sessions.map(session => {return new Activity(session.day, session.kilogram,session.calories)})
  setActivity(sessions)
}

/**
 * Retrieves the average sessions data for a user with the specified ID from the server
 * and sets it into a state variable using the provided setAverageSession function.
 *
 * @async
 * @function fetchSession
 * @param {function} setAverageSession - The function to set the retrieved data into a state variable
 * @param {number} [userId=12] - The ID of the user to retrieve the data for (default value: 12)
 * @throws {Error} Will throw an error if there is a problem with the network request
 * @returns {Promise<void>} A promise that resolves when the data has been retrieved and set into the state variable
 */
export async function fetchSession(setAverageSession, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/average-sessions');
  const averageSessions = response.data.data.sessions.map(session => {return new AverageSession(session.day, session.sessionLength)})
  setAverageSession(averageSessions);
}


/**
Fetches user's performance data from the API endpoint and sets it in the state variable using the provided setPerformance function.
@async
@function fetchPerformance
@param {function} setPerformance - The state setter function for performance data.
@param {number} [userId=12] - The user ID to fetch data for.
@returns {Promise<void>}
@throws {Error} When API endpoint returns an error or data is malformed.
*/
export async function fetchPerformance(setPerformance ,userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId + '/performance');
  const performance = response.data.data.data.map(kind => {return new Performance(kind.kind, kind.value, response.data.data.kind)})
  setPerformance(performance)
}


// function to fetch Scores

/**

Asynchronous function that fetches user scores.
@async
@function
@param {Function} setScores - Callback function to set the fetched scores.
@param {number} [userId=12] - Optional parameter that specifies the user id. Default is 12.
@returns {Promise<void>} - Promise object that resolves when the scores are set via setScores callback.
*/
export async function fetchScores(setScores, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId);
  const score = response.data.data.todayScore ? response.data.data.todayScore : response.data.data.score;
  const baseScore = new Score(null, 100, '#FBFBFB', '#FBFBFB', '0');
  const todayScore= new Score(null, score*100,'#FF0000');
  setScores([baseScore, todayScore ]) ;
}

/**
Fetches the first name of a user with the given user ID and updates the state using setFirstName.
@async
@function
@param {function} setFirstName - A state updater function that sets the first name of the user.
@param {number} [userId=12] - The ID of the user to fetch. Defaults to 12 if not provided.
@returns {Promise<void>}
*/
export async function fetchFirstName(setFirstName, userId=12) {
  const response = await axios.get('http://localhost:3000/user/' + userId);
  setFirstName(response.data.data.userInfos.firstName);
}
