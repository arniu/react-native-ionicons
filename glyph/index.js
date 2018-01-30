import glyphs from './map.json'

/**
 * Get glyph
 *
 * @param {Array.<?string>} iconNames
 * @param {string} currentOS
 * @param {boolean} [active]
 * @return {string}
 */
export default function getGlyph (iconNames, currentOS, active) {
  const code = iconNames.reduce((prev, name) => {
    if (prev) return prev

    if (name in glyphs) {
      return glyphs[name]
    }

    const xs = []
    if (currentOS === 'ios') {
      xs.push('ios', name)
      if (!active) {
        xs.push('outline')
      }
    } else {
      xs.push('md', name)
    }

    return glyphs[xs.join('-')]
  }, undefined)

  return code ? String.fromCharCode(code) : ''
}
