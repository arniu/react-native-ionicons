#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * @param {any} value
 * @return {string}
 */
function stringify(value) {
  return JSON.stringify(value, null, 2)
}

/**
 * @param {string} text
 * @return {Object.<string, number>}
 */
function parseGlyphs(text) {
  const glyph = {}
  const regex = /ion-([^:]+):before.+content:\s*"\\(\w+)"/gm
  for (let result; (result = regex.exec(text)); ) {
    glyph[result[1]] = parseInt(result[2], 16)
  }

  return glyph
}

function resolvePath(file) {
  return `${__dirname}/node_modules/ionicons/dist/${file}`
}

const FILES = (exports.FILES = {
  GLYPH_MAP: 'glyph/map.json',
  FONT_FILE: 'fonts/Ionicons.ttf',
})

function generate() {
  const workflows = [
    {
      file: FILES.GLYPH_MAP,
      from: 'scss/ionicons-icons.scss',
      steps: [String, parseGlyphs, stringify],
    },
    {
      file: FILES.FONT_FILE,
      from: 'fonts/ionicons.ttf',
      steps: [],
    },
  ].map(({ file, from, steps }) =>
    [resolvePath, fs.readFileSync, ...steps]
      .reduce((prev, next) => prev.then(next), Promise.resolve(from))
      .then((it) => fs.writeFileSync(path.resolve(__dirname, file), it))
      .then(() => console.log(`  Generated ${file} ...`))
  )

  Promise.all(workflows)
    .then(() => console.log('All is done'))
    .catch((e) => console.log(e.message))
}

// only run as script
if (require.main === module) {
  generate()
}
