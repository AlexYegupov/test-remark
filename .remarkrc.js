import remarkToc from 'remark-toc'
//import testPlugin from './remark-test-plugin/index.js'
//import remarkHTML from 'remark-html';
import remarkValidateLinks from 'remark-validate-links';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import autolink from 'remark-autolink-references'
//import remarkSortDefinitions from 'remark-sort-definitions';

import { visit } from 'unist-util-visit'
import { isElement } from 'hast-util-is-element'


export default {
  settings: {
    bullet: '*',
  },
  plugins: [
    //[testPlugin],
    [remarkValidateLinks],

    // replace empty link text to link url
    // [](my#link) -> [my#link](my#link)
    [() => (tree, file) => {
      visit(tree, 'link', (node, index, parent) => {

        if (node.url && !node?.children?.[0]?.value) {
          //node.title = node.url;
          node.children = [{
            type: 'text',
            value: node.url,
          }]
        }
      })
    }],

    // probably tend to generate toc on docsify level (to avoid confusing if necessary to modify toc when editing document)
    // add empy "## Table of contents" chapter to auto-update TOC there
    // [remarkToc, {heading: 'Table of contents'}],

    [autolink, {
      prefix: 'JIRA-',
      url: 'https://MYJIRALINK.com/browse/JIRA-<num>'
    }],

    //w [remarkSortDefinitions]

    // (keep to end)
    //(not using rehype now) [...markdownToHTMLPlugins]
  ]
}

// const markdownToHTMLPlugins = [
//     // .md links -> .html links
//     [() => (tree, file) => {
//       visit(tree, 'link', (node, index, parent) => {
//         const md2html = (text) => text.replace(/\.md($|#|\\?)/,'.html$1')
//
//         node.url = md2html(node.url)
//         const text = node?.children?.[0]?.value
//         if (text) {
//           node.children[0].value = md2html(text)
//         }
//       })
//     }],
//  // replace .md -> .html links as rehype plugin
//  //    [() => (tree, file) => {
//  //      visit(tree, 'element', (node, index, parent) => {
//  //        if (isElement(node, 'a')) {
//  //          console.log(`N:`, node.properties.href)
//  //          const oldHref = node.properties.href
//  //          node.properties.href = oldHref.replace(/.md$/,'.html')
//  //        }
//  //      })
//  //    }],
//
//     //[remarkHTML],
//     [remarkRehype],
//     [rehypeSlug], // add id to <h1>
//
//     [rehypeAutolinkHeadings],  // <h2>My Header</h2><a id="my-header"></a>
//     [rehypeStringify],
//
//     [() => (tree, file) => {
//       file.extname = '.html'
//     }],
// ]
