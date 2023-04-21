import './goalScore.css'
import { RadialBarChart, RadialBar, Legend } from 'recharts';

function TodayScoreChart({ scores }) {
  console.log(scores)
  if (scores.length === 0) return <div className="graph-goal"><div className="goal-title">Score</div></div>


  // const COLORS = ['#FF0000'];
  return (
    <div className='graph-goal'>
      <div className='goal-title'>Score</div>
      <RadialBarChart width={258} height={263}  innerRadius="50%" outerRadius="100%" barSize={10} data={scores}>
          <RadialBar
            minAngle={15}
            label={{ position: 'center', fill: 'transparent' }}
            background
            clockWise
            dataKey="value"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="bottom"  />
        </RadialBarChart>
        <div className='graph-goal-value'>
          <div className='graph-value'>{scores[1].value}%</div>
          <div className='graph-text'>Of the day</div>
        </div>
    </div>
  );
}

export default TodayScoreChart;