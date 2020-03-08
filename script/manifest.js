const pkg = require("ionicons/package.json");

module.exports = {
  name: "Ionicons",
  version: pkg.version,
  license: pkg.license,

  /**
   * According to the [manifest][manifest] of Ionicons v4, the codepoint starts from `0xf100`.
   *
   * [manifest]: https://github.com/ionic-team/ionicons/blob/4.x/scripts/manifest.json
   */
  startAt: 0xf100
};
