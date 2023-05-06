/**
 * A Radar chart component to display user's performance data.
 * @param {object} props - The props object containing user performance data.
 * @param {Array} props.userPerformanceData - An array of objects containing performance data.
 * @param {string} props.userPerformanceData.kindToDisplay - A string representing the kind of data to be displayed.
 * @param {number} props.userPerformanceData.value - A number representing the performance value.
 * @returns {JSX.Element} A Radar chart component.
 */
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './performance.css'

const UserPerformanceRadarChart = ({ userPerformanceData }) => {
  
  let width = Math.round(window.innerWidth / 5.47);
  width = width > 258 ? 258 : width
  let height = Math.round(window.innerWidth / 5.47);
  height = height > 263 ? 263 : height
  
  return (
    <div className='graph-container'>
    <RadarChart className='graph-performance' outerRadius={75} width={width} height={height} data={userPerformanceData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kindToDisplay" stroke="white" tick={{fontSize: 12}}/>
      <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
    </div>
  );
};

export default UserPerformanceRadarChart;