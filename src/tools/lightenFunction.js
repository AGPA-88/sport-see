/**
Returns a lighter shade of a given color in hex format
@param {string} hexColor - The hex representation of the color to lighten, e.g. "#FF0000"
@param {number} percent - The percentage (0-1) to lighten the color by
@returns {string} - The hex representation of the lighter color
*/

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