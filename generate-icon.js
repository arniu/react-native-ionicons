#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const debug = console.log

/**
 * @param {any} value
 * @return {string}
 */
function stringify (value) {
  return JSON.stringify(value, null, 2)
}

/**
 * @param {string} text
 * @return {Object.<string, number>}
 */
function parseGlyphs (text) {
  const glyph = {}
  const regex = /ion-([^:]+):before.+content:\s*"\\(\w+)"/gm
  for (let result; (result = regex.exec(text));) {
    glyph[result[1]] = parseInt(result[2], 16)
  }

  return glyph
}

function resolvePath (file) {
  return `${__dirname}/node_modules/ionicons/dist/${file}`
}

;(function () {
  const recipes = [
    {
      file: 'glyph/map.json',
      source: 'scss/ionicons-icons.scss',
      steps: [String, parseGlyphs, stringify]
    },
    {
      file: 'fonts/Ionicons.ttf',
      source: 'fonts/ionicons.ttf',
      steps: []
    }
  ].map(({ file, source, steps }) =>
    [resolvePath, fs.readFileSync, ...steps]
      .reduce((prev, next) => prev.then(next), Promise.resolve(source))
      .then(data => fs.writeFileSync(path.resolve(__dirname, file), data))
  )

  Promise.all(recipes)
    .then(() => debug('done!'))
    .catch(e => debug(e.message))
})()
