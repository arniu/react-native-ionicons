const { Readable } = require("stream");
const FontStream = require("svgicons2svgfont");
const manifest = require("./manifest");

/**
 * @typedef IconData
 * @property {string} icon
 * @property {string} name
 * @property {number} code
 *
 * @param {IconData[]} list
 * @returns {string}
 */
module.exports = function prepareSVG(list) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const stream = new FontStream({
      fontName: manifest.name,
    });

    stream
      .on("error", (err) => reject(err))
      .on("finish", () => resolve(Buffer.concat(chunks).toString()))
      .on("data", (chunk) => chunks.push(chunk));

    list.forEach((it) => {
      const pair = it.icon.split(",");
      if (pair.length !== 2) {
        throw new Error(`Invalid icon ${it.name}`);
      }

      const readable = Readable.from(pair[1]);
      readable.metadata = {
        unicode: [String.fromCodePoint(it.code)],
        name: it.name,
      };

      stream.write(readable);
    });

    stream.end();
  });
};
