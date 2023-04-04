import React from "react";

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

export default function Days() {
  const sessions = [
    { day: "Monday", sessionLength: 60 },
    { day: "Tuesday", sessionLength: 90 },
    { day: "Wednesday", sessionLength: 75 },
    { day: "Thursday", sessionLength: 45 },
    { day: "Friday", sessionLength: 120 }
  ];

  const averageSessionTime = calculateAverageSessionTime(sessions);

  return (
    <div>
      <h1>Average Sport Session Time: {averageSessionTime} minutes</h1>
    </div>
  );
}