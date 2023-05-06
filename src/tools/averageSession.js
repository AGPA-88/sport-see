import React from "react";


/**

Calculates the average session time from an array of sessions.
@param {Array} sessions - An array of sessions to calculate the average from.
@returns {Number} - The average session time in seconds.
*/
function calculateAverageSessionTime(sessions) {
  if (sessions.length === 0) {
    return 0;
  }
  
  const totalSessionLength = sessions.reduce((total, session) => {
    return total + session.sessionLength;
  }, 0);

  const averageSessionTime = totalSessionLength / sessions.length;

  return averageSessionTime;
}


/**

A functional component that renders the average sport session time based on the given sessions.
@returns {JSX.Element} The rendered JSX element that shows the average session time.
/
function Days() {
/*
An array of sessions with their respective day and session length.
@type {Array<Object>}
*/
export default function Days() {
  const sessions = [
    { day: "Monday", sessionLength: 60 },
    { day: "Tuesday", sessionLength: 90 },
    { day: "Wednesday", sessionLength: 75 },
    { day: "Thursday", sessionLength: 45 },
    { day: "Friday", sessionLength: 120 }
  ];


/**
Calculates the average session time based on the given sessions.
@param {Array<Object>} sessions - The array of sessions to calculate the average session time from.
@returns {number} The calculated average session time in minutes.
*/
  const averageSessionTime = calculateAverageSessionTime(sessions);

  return (
    <div>
      <h1>Average Sport Session Time: {averageSessionTime} minutes</h1>
    </div>
  );
}