//import remarkToc from 'remark-toc'

import testPlugin from './remark-test-plugin/index.js'
//import noDeadUrls from './remark-lint-no-dead-internal-urls/index.js'
//import remarkHTML from 'remark-html';
import remarkValidateLinks from 'remark-validate-links';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'


import { visit } from 'unist-util-visit'
import { isElement } from 'hast-util-is-element'

//module.exports = {
export default {
  settings: {
    bullet: '*',
  },
  plugins: [
    //[testPlugin],
    //[require('remark-reference-links'), {}],
    [remarkValidateLinks],
    [rehypeAutolinkHeadings],

    //[remarkToc, {heading: 'contents'}]

    //(not using rehype now) [...md2htmlPlugins]
  ]
}

// rehype plugins
const md2htmlPlugins = [
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

/*  replace .md -> .html links as rehype plugin
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
]
