/* eslint-disable global-require */

// polyfills and vendors

// vendors - load up a polyfill, meaning it fills in anything that a browser is missing.
if (!window._babelPolyfill) {
  require('babel-polyfill');
}
