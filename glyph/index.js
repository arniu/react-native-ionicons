import glyphs from './map.json'

export const UNKNOWN_ICON = ''

/**
 * Try glyph
 *
 * @param {Array.<?string>} iconNames
 * @param {function(string): string} mapper
 * @return {string}
 */
export function tryGlyph(iconNames, mapper) {
  const code = iconNames.reduce((prev, name) => {
    return prev || glyphs[name in glyphs ? name : mapper(name)]
  }, undefined)

  return code ? String.fromCharCode(code) : UNKNOWN_ICON
}

/**
 * @typedef
 */
