import glyphs from './map.json'

/**
 * Get glyph
 *
 * @param {Array.<?string>} iconNames
 * @param {string} prefix
 * @return {string}
 */
export default function (iconNames, prefix) {
  const code = iconNames.reduce((prev, name) => {
    return prev || glyphs[name in glyphs ? name : `${prefix}-${name}`]
  }, undefined)

  return code ? String.fromCharCode(code) : ''
}
