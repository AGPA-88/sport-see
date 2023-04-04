import lightenColor from '../../tools/lightenFunction';

function Icon({ icon, color, units, unit_name, value }) {
  const iconColor = color || '#00000F';
  const lightenedColor = lightenColor(iconColor, 0.2);

  return (
    <div className='icons-card' style={{display: 'inline-block', padding: 8, borderRadius: 4 }}>
      <div style={{ backgroundColor: lightenedColor }}>
        <div style={{ color: iconColor, backgroundColor: lightenColor(color, 0.9), display:'flex' , justifyContent:'center' }}>
          {icon }
        </div>
      </div>
      <div className='values'>
          {value} {units}
          <div>
              {unit_name}
          </div>
      </div>
    </div>
  );
}

export default Icon;