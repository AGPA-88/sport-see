/**
A functional component for rendering an icon with a value and units.
@component
@param {Object} props - The props object containing the icon, color, units, unit_name, and value properties.
@param {JSX.Element} props.icon - The JSX element representing the icon to display.
@param {string} [props.color='#00000F'] - The color of the icon.
@param {string} props.units - The units associated with the value.
@param {string} props.unit_name - The name of the unit.
@param {number} props.value - The value to display.
@return {JSX.Element} - The Icon component.
*/

import lightenColor from '../../tools/lightenFunction';
import './icons.css'

function Icon({ icon, color, units, unit_name, value }) {
  const iconColor = color || '#00000F';
  const lightenedColor = lightenColor(iconColor, 0.9);

  return (
    <div className='icons-container'>
      <div className='icon-card' style={{ backgroundColor: lightenedColor }}>
        <div className='icon-img' style={{ color: iconColor, backgroundColor: lightenedColor }}>
          {icon }
        </div>
      </div>
      <div className='values-container'>
        <div className='values'>
          {value}{units}
        </div>
          <div className='units'>
              {unit_name}
          </div>
      </div>
    </div>
  );
}

export default Icon;