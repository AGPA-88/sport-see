import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './dailyActivity.css'

function ActivityGraph({ sessions }) {
  return (
    <div className='graph-activity'>
      <div className='title-container'>
        <div className='activity-title'>Daily Activity</div>
      </div>
      <BarChart width={1000} height={320} data={sessions} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis position/>
        <Tooltip />
        <Legend verticalAlign="top" height={36} align="right" iconType="circle"/>
        <Bar dataKey="kilogram" name="Weight (kg)" fill="#282D30" barSize={8} radius={5}/>
        <Bar dataKey="calories" name="Burned calories (kCal)" fill="#E60000" barSize={8} radius={5}/>
      </BarChart>
    </div>
  );
}

export default ActivityGraph;