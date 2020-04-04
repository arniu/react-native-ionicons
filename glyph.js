import map from "./fonts/Ionicons.json";

/**
 * Try glyph
 *
 * @param {Array.<?string>} iconNames
 * @return {string}
 */
export function tryGlyph(iconNames) {
  const code = iconNames.reduce((prev, key) => prev || map[key], undefined);
  return code ? String.fromCharCode(code) : UNKNOWN_ICON;
}

export const UNKNOWN_ICON = "";
