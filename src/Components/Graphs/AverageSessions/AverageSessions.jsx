import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './averageSessions.css'

const UserAverageSessionsLineChart = ({ averageSession }) => {
  const dayInLetters = ['offset', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
  averageSession.forEach(session => {session.dayToDisplay = dayInLetters[session.day];});

  return (
    <div className='chart-average'>
      <div className='average-title'>Average speed of your sessions</div>
      <ResponsiveContainer width={258} height={263}>
        <LineChart data={averageSession}>
          <XAxis dataKey='dayToDisplay' stroke="white" />
          <Tooltip />
          <Legend verticalAlign="top" align="right" iconType="circle"/>
          <Line type="basis" dataKey='sessionLength' name='min' stroke="white" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default UserAverageSessionsLineChart;