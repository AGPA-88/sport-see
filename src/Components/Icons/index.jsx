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