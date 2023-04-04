function lightenColor(hexColor, percent) {
  const hex = hexColor.replace('#', '');

  if (hex.length !== 6) {
    console.error('Invalid color string: ' + hexColor);
    return hexColor;
  }

  const rgb = [parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16)];

  const newRgb = rgb.map(value => Math.floor(value + (255 - value) * percent));

  const newHex = newRgb.map(value => {
    const hexValue = value.toString(16);
    return hexValue.length === 1 ? '0' + hexValue : hexValue;
  }).join('');

  return '#' + newHex;
}

export default lightenColor;