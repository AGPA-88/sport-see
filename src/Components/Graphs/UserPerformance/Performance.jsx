import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './performance.css'

const UserPerformanceRadarChart = ({ userPerformanceData, kind }) => {
  
  console.log(userPerformanceData);
  console.log(kind);
  userPerformanceData.forEach(kindData => {kindData.kindToDisplay = kind[kindData.kind]})
  return (
    <div className='graph-container'>
    <RadarChart className='graph-performance' cx={125} cy={130} outerRadius={75} width={258} height={263} data={userPerformanceData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kindToDisplay" stroke="white" tick={{fontSize: 12}}/>
      <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
    </div>
  );
};

export default UserPerformanceRadarChart;