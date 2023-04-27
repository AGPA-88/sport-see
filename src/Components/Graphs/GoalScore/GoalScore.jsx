/**
 * Component for rendering a radial chart of the user's goal score.
 *
 * @component
 * @param {Array} scores - The array of score data to be displayed in the chart.
 * @returns {JSX.Element} - A React component that displays the radial chart of the user's goal score.
 */

import './goalScore.css'
import { RadialBarChart, RadialBar, Legend } from 'recharts';

function TodayScoreChart({ scores }) {
  console.log(scores)
  if (scores.length === 0) return <div className="graph-goal"><div className="goal-title">Score</div></div>

  /**
   * Data for the radial chart. Each object contains a 'value' property,
   * which corresponds to the percentage of the goal score achieved, and
   * a 'fill' property, which determines the color of the chart's segments.
   * @typedef {Object} RadialBarChartData
   * @property {number} value - The percentage of the goal score achieved.
   * @property {string} fill - The color of the chart's segments.
   */

  /**
   * Data for the RadialBarChart.
   * @type {Array.<RadialBarChartData>}
   */
  return (
    <div className='graph-goal'>
      <div className='goal-title'>Score</div>
      <RadialBarChart width={280} height={295}  innerRadius="50%" outerRadius="100%" barSize={10} data={scores}>
          <RadialBar
            minAngle={15}
            label={{ position: 'center', fill: 'transparent' }}
            background
            clockWise
            dataKey="value"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="bottom"  /> */}
        </RadialBarChart>
        <div className='graph-goal-value'>
          <div className='graph-value'>{scores[1].value}%</div>
          <div className='graph-text'>Of the day</div>
        </div>
    </div>
  );
}

export default TodayScoreChart;