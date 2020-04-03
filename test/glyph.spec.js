import { UNKNOWN_ICON, tryGlyph } from "../glyph";

describe("tryGlyph", () => {
  it("should have `add` icon", () => {
    const icon = tryGlyph(["add", null]);
    expect(icon).not.toBe(UNKNOWN_ICON);
  });
});
