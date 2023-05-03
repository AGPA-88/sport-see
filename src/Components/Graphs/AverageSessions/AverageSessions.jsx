import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './averageSessions.css'

/**
A component that displays a line chart of the average speed of user sessions.
@param {object} props - The props object that contains the averageSession data.
@param {array} props.averageSession - An array of objects representing the average speed of sessions per day.
@returns {JSX.Element} - A React component that displays a line chart of the average speed of user sessions.
*/
const UserAverageSessionsLineChart = ({ averageSession }) => {
  if (averageSession.length === "0") return <div></div>
  console.log("🚀 ~ file: AverageSessions.jsx:14 ~ UserAverageSessionsLineChart ~ averageSession:", averageSession)

  let width = Math.round(window.innerWidth / 5.47);
  width = width > 258 ? 258 : width
  let height = Math.round((window.innerWidth) / 5.47);
  height = height > 263 ? 263 : height

  return (
    <div className='graph-average'>
      <div className='average-title'>Average speed of your sessions</div>
      <ResponsiveContainer width={width} height={height}>
        <LineChart data={averageSession}>
          <XAxis dataKey='dayToDisplay' stroke="white" />
          <Tooltip />
          <Line type="basis" dataKey='sessionLength' name='min' stroke="white" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserAverageSessionsLineChart;