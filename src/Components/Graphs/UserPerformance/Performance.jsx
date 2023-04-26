import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './performance.css'

const UserPerformanceRadarChart = ({ userPerformanceData }) => {
  
  console.log(userPerformanceData);
  return (
    <div className='graph-container'>
    <RadarChart className='graph-performance' outerRadius={75} width={280} height={295} data={userPerformanceData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kindToDisplay" stroke="white" tick={{fontSize: 12}}/>
      <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
    </div>
  );
};

export default UserPerformanceRadarChart;