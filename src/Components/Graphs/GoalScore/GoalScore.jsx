import './goalScore.css'
import { RadialBarChart, RadialBar, Legend } from 'recharts';

function TodayScoreChart({ todayScore }) {


  // const COLORS = ['#FF0000'];
  const score1 = new Score(null, 100, '#FBFBFB', '#FBFBFB', '0');
  const score2= new Score(null, todayScore*100,'#FF0000');
  const scores = [score1, score2 ];

  return (
    <div className='graph-goal'>
      <div className='goal-title'>Score</div>
      {/* <RadialBarChart width={258} height={263} cx={125} cy={130} innerRadius={65} outerRadius={75} data={scores}>
        <RadialBar minAngle={15} label={{ position: 'center', fill: '#fff00' }} background clockWise dataKey="value">
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </RadialBar>
        <RadialBar dataKey="">
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </RadialBar>
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align='right'/>
      </RadialBarChart> */}
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
          <div className='graph-value'>{todayScore*100}%</div>
          <div className='graph-text'>Of the day</div>
        </div>
    </div>
  );
}

class Score{
  constructor(name, value, fill, stroke,fontSize){
    this.name=name;
    this.value=value;
    this.fill=fill;
    this.stroke=stroke;
    this.fontSize=fontSize;
  }
}

export default TodayScoreChart;