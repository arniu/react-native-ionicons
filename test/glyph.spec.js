import { UNKNOWN_ICON, tryGlyph } from '../glyph'

describe('should work on ios devices', () => {
  const mapper = (x) => `ios-${x}`

  it('should have `add` icon', () => {
    const icon = tryGlyph(['add', null], mapper)
    expect(icon).not.toBe(UNKNOWN_ICON)
  })
})

describe('should work on android devices', () => {
  const mapper = (x) => `md-${x}`

  it('should have `add` icon', () => {
    const icon = tryGlyph(['add', null], mapper)
    expect(icon).not.toBe(UNKNOWN_ICON)
  })
})
