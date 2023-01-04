/* import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
 * import remarkPresetLintRecommended from 'remark-preset-lint-recommended' */
//import PPP from 'remark-lint-no-file-name-irregular-characters';
//import remarkToc from 'remark-toc'

import testPlugin from './remark-test-plugin/index.js'
//import noDeadUrls from './remark-lint-no-dead-internal-urls/index.js'
//import remarkHTML from 'remark-html';
import remarkValidateLinks from 'remark-validate-links';
//const noDeadUrls =require('./remark-lint-no-dead-internal-urls/index.js');
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { visit } from 'unist-util-visit'
import { isElement } from 'hast-util-is-element'
//const plugin = require('remark-lint-no-dead-urls')


//module.exports = {
export default {
  settings: {
    bullet: '*', // Use `*` for list item bullets (default)
    // See <https://github.com/remarkjs/remark/tree/main/packages/remark-stringify> for more options.
  },
  plugins: [
    //ejs [require('remark-lint-no-undefined-references'), {aa:'AA'}],

    //[require('remark-lint-no-dead-urls'), {dummy: 'Options'}]

    //w [noDeadUrls],
    [testPlugin],

    //[require('remark-reference-links'), {}],
    [remarkValidateLinks],

    // .md links -> .html links
    [() => (tree, file) => {
      visit(tree, 'link', (node, index, parent) => {
        const md2html = (text) => text.replace(/\.md($|#|\\?)/,'.html$1')

        node.url = md2html(node.url)
        const text = node?.children?.[0]?.value
        if (text) {
          node.children[0].value = md2html(text)
        }
      })
    }],


    //[remarkHTML],
    [remarkRehype],
    [rehypeSlug], // add id to <h1>
    [rehypeAutolinkHeadings],
/*
    [() => (tree, file) => {
      visit(tree, 'element', (node, index, parent) => {
        if (isElement(node, 'a')) {
          console.log(`N:`, node.properties.href)
          const oldHref = node.properties.href
          node.properties.href = oldHref.replace(/.md$/,'.html')
        }
      })
    }],
 */
    [rehypeStringify],

    [() => (tree, file) => {
      file.extname = '.html'
    }],

    //remarkPresetLintConsistent, // Check that markdown is consistent.
    //remarkPresetLintRecommended, // Few recommended rules.
    // Generate a table of contents in `## Contents`
    //[remarkToc, {heading: 'contents'}]
  ]
}
