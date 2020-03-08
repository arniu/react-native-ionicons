const xml = require("xmldom");

/**
 * Extract path from a svg icon
 *
 * @param {string} text The svg icon
 * @returns {string} Path string
 */
module.exports = function extract(text) {
  // data:image/svg+xml;utf8,<svg data/>
  const content = text.split(",")[1];
  if (!content || !content.startsWith("<svg")) {
    throw new Error(`Invalid icon: ${text}`);
  }

  const paths = new xml.DOMParser()
    .parseFromString(content)
    .getElementsByTagName("path");

  return Array.prototype.map
    .call(paths, path => path.getAttribute("d"))
    .join(" ");
};
