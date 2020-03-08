#! /usr/bin/env node

function main() {
  const list = prepareData();
  const path = preparePath();

  createJson(list, path.json);
  createType(list, path.type);
  createFont(list, path.font);
}

function preparePath() {
  const path = require("path");
  const manifest = require("./manifest");
  const root = path.resolve(__dirname, "..");

  return {
    json: path.resolve(root, `glyph/map.json`),
    font: path.resolve(root, `fonts/${manifest.name}.ttf`),
    type: path.resolve(root, `index.d.ts`)
  };
}

/**
 * @typedef IconData
 * @property {string} name
 * @property {string} path
 * @property {number} code
 *
 *
 * @returns {IconData[]}
 */
function prepareData() {
  const extract = require("./extract");
  const manifest = require("./manifest");
  const decamelize = require("decamelize");
  const icons = require("ionicons/icons");
  const regex = /[a-z]\w+/;

  const list = [];
  let code = manifest.startAt;
  for (const name in icons) {
    if (regex.test(name)) {
      list.push({
        name: decamelize(name, "-"),
        path: extract(icons[name]),
        code: code++
      });
    }
  }

  return list;
}

/**
 * Create glyph map
 *
 * @param {IconData[]} list
 * @param {string} path
 */
function createJson(list, path) {
  const fs = require("graceful-fs");
  const json = list.reduce((map, it) => {
    map[it.name] = it.code;
    return map;
  }, {});

  fs.writeFileSync(path, JSON.stringify(json, null, 2));
}

/**
 * Create font file
 *
 * @param {IconData[]} list
 * @param {string} path
 */
function createFont(list, path) {
  const fs = require("graceful-fs");
  const svg2ttf = require("svg2ttf");
  const prepareSVG = require("./prepareSVG");
  const buf = svg2ttf(prepareSVG(list));

  fs.writeFileSync(path, buf.buffer);
}

/**
 * Create iconName.d.ts file
 *
 * @param {IconData[]} list
 * @param {string} path
 */
function createType(list, path) {
  const fs = require("graceful-fs");
  const prepareType = require("./prepareType");
  const content = prepareType(list);

  fs.writeFileSync(path, content);
}

if (require.main === module) {
  main();
}
