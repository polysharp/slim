/*!
 * @param  {String} A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
const getTextColor = (hex) => {
  let hexColor = hex;

  if (hexColor.slice(0, 1) === '#') hexColor = hexColor.slice(1);

  if (hexColor.length === 3)
    hexColor = hexColor
      .split('')
      .map((newHex) => newHex + newHex)
      .join('');

  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? 'black' : 'white';
};

export default getTextColor;
