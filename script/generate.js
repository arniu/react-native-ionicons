#! /usr/bin/env node

async function main() {
  const list = prepareData();
  const path = preparePath();

  await Promise.all([
    createJson(list, path.json),
    createType(list, path.type),
    createFont(list, path.font)
  ]);
}

function preparePath() {
  const path = require("path");
  const manifest = require("./manifest");
  const root = path.resolve(__dirname, "..");

  return {
    json: path.resolve(root, `fonts/${manifest.name}.json`),
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
async function createJson(list, path) {
  const fs = require("fs-extra");
  const json = list.reduce((map, it) => {
    map[it.name] = it.code;
    return map;
  }, {});

  await fs.outputJSON(path, json, { spaces: 2 });
}

/**
 * Create font file
 *
 * @param {IconData[]} list
 * @param {string} path
 */
async function createFont(list, path) {
  const fs = require("fs-extra");
  const svg2ttf = require("svg2ttf");
  const prepareSVG = require("./prepareSVG");
  const ttf = svg2ttf(prepareSVG(list));

  await fs.outputFile(path, ttf.buffer);
}

/**
 * Create iconName.d.ts file
 *
 * @param {IconData[]} list
 * @param {string} path
 */
async function createType(list, path) {
  const fs = require("fs-extra");
  const prepareType = require("./prepareType");
  const content = prepareType(list);

  await fs.outputFile(path, content);
}

if (require.main === module) {
  main();
}
