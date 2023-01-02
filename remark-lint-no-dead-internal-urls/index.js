'use strict';

const rule = require('unified-lint-rule');
const visit = require('unist-util-visit');
const checkLinks = require('check-links');
const isOnline = require('is-online');

//const ALL_FILES = []

function noDeadUrls(ast, file, options) {

  //console.log(`noDeadUrls`, file.stem, ALL_FILES)
  //console.log(`FILE_`, file.path )

  //ALL_FILES.push(file.stem)
  /*
   *   const fff = (node) => {
   *     console.log(`FFF`, node)
   *   }
   *   visit(ast, ['heading'], fff);
   *  */

  const urlToNodes = {};

  const aggregate = (node) => {

    //console.log(`aggregate:`, ALL_FILES)
    console.log(`NNN:`, node.url)

    const url = node.url;
    if (!url) return;
    if (
      options.skipLocalhost &&
      /^(https?:\/\/)(localhost|127\.0\.0\.1)(:\d+)?/.test(url)
    ) {
      return;
    }
    if (
      options.skipUrlPatterns &&
      options.skipUrlPatterns.some((skipPattern) =>
        new RegExp(skipPattern).test(url)
      )
    ) {
      return;
    }

    if (!urlToNodes[url]) {
      urlToNodes[url] = [];
    }

    urlToNodes[url].push(node);
  };
  visit(ast, ['link', 'image', 'definition'], aggregate);

  return checkLinks(Object.keys(urlToNodes), options.gotOptions).then(
    (results) => {
      Object.keys(results).forEach((url) => {
        const result = results[url];
        if (result.status !== 'dead') return;

        const nodes = urlToNodes[url];
        if (!nodes) return;

        for (const node of nodes) {
          file.message(`Link to ${url} is DEAD`, node);
        }
      });
    }
  );
}

function wrapper(ast, file, options) {
  options = options || {};

  //console.log(`wrapper`, file.stem)

  // return isOnline().then((online) => {
  //   if (!online) {
  //     if (!options.skipOffline) {
  //       file.message('You are not online and have not set skipOffline: true.');
  //     }
  //     return;
  //   }
  //ALL_FILES.push(file.stem)

  return noDeadUrls(ast, file, options);
  //});
}

console.log(`EEEEEEEEEEe`)

module.exports = rule('remark-lint:no-dead-internal-urls', wrapper);
