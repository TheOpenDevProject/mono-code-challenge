// This doesn't have types for some reason
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DefaultReporter } = require("@jest/reporters");

// Credit : https://github.com/XYShaoKang/video-http-server/commit/84d8ce5630f88b17e1ebdbb11dd74e5107d649e6

/**
 * Note: This hack is only required while Microsoft is building specific support for applications that write to the stderr
 * stream.
 * Track here: https://github.com/microsoft/rushstack/issues/1329
 */

/**
 * The purpose of this custom reporter is to prevent Jest from logging to stderr
 * when there are no errors.
 */
class JestReporter extends DefaultReporter {
  _isLoggingError = false;

  log(message) {
    if (this._isLoggingError) {
      process.stderr.write(message + "\n");
    } else {
      process.stdout.write(message + "\n");
    }
  }

  printTestFileFailureMessage(...args) {
    this._isLoggingError = true;
    super.printTestFileFailureMessage(...args);
    this._isLoggingError = false;
  }
}

// jest needs this format
module.exports = JestReporter;
