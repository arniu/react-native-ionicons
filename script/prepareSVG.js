const makeFont = glyphs => `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
<defs>
<font id="Ionicons" horiz-adv-x="416" >
  <font-face
    font-family="Ionicons"
    font-stretch="normal"
    font-weight="400"
    units-per-em="512"
    descent="-64"
    ascent="448"
  />
  <missing-glyph />
  <!-- Glyphs here -->
  ${glyphs.join("\n  ")}
</font>
</defs>
</svg>
`;

const makeGlyph = ({ name, code, path }) => `<glyph
  glyph-name="${name}"
  unicode="&#${code.toString(16)};"
  d="${path}"
/>`;

/**
 * @typedef IconData
 * @property {string} name
 * @property {string} path
 * @property {number} code
 *
 * @param {IconData[]} list
 * @returns {string}
 */
module.exports = function prepareSVG(list) {
  return makeFont(list.map(makeGlyph));
};
