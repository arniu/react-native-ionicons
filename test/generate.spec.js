import fs from 'fs'
import { resolve } from 'path'
import { FILES } from '../generate'

it(`should exist: ${FILES.FONT_FILE}`, () => {
  const path = resolve(__dirname, '..', FILES.FONT_FILE)
  expect(fs.existsSync(path)).toBeTruthy()
})

it(`should exist: ${FILES.GLYPH_MAP}`, () => {
  const path = resolve(__dirname, '..', FILES.GLYPH_MAP)
  expect(fs.existsSync(path)).toBeTruthy()
})
