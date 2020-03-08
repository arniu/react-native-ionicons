import map from "./fonts/Ionicons.json";

/**
 * Try glyph
 *
 * @param {Array.<?string>} iconNames
 * @param {function(string): string} mapper
 * @return {string}
 */
export function tryGlyph(iconNames, mapper) {
  const code = iconNames.reduce((prev, name) => {
    return prev || map[name in map ? name : mapper(name)];
  }, undefined);

  return code ? String.fromCharCode(code) : UNKNOWN_ICON;
}

export const UNKNOWN_ICON = "";
