/* import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
 * import remarkPresetLintRecommended from 'remark-preset-lint-recommended' */
//import PPP from 'remark-lint-no-file-name-irregular-characters';
//import remarkToc from 'remark-toc'

//import plugin from './remark-test-plugin/index.js'


//const plugin = require('remark-lint-no-dead-urls')

module.exports = {
//export default {
  settings: {
    bullet: '*', // Use `*` for list item bullets (default)
    // See <https://github.com/remarkjs/remark/tree/main/packages/remark-stringify> for more options.
  },
  plugins: [
    //ejs [require('remark-lint-no-undefined-references'), {aa:'AA'}],

    //[require('./remark-lint-no-dead-internal-urls'), {dummy: 'Options'}]

    //[require('remark-lint-no-dead-urls'), {}]
    [require('./remark-test-plugin'), {}]

    //remarkPresetLintConsistent, // Check that markdown is consistent.
    //remarkPresetLintRecommended, // Few recommended rules.
    // Generate a table of contents in `## Contents`
    //[remarkToc, {heading: 'contents'}]
  ]
}
