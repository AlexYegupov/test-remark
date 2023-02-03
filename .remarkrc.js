//import remarkHTML from 'remark-html';
import remarkValidateLinks from 'remark-validate-links';
import remarkAutolinkReferences from 'remark-autolink-references'
import remarkGfm from 'remark-gfm'  // seem
import remarkLintNoUndefinedReferences from  'remark-lint-no-undefined-references'
import remarkLintNoFileNameIrregularCharacters from 'remark-lint-no-file-name-irregular-characters'


import { visit } from 'unist-util-visit'
import { isElement } from 'hast-util-is-element'

export default {
  settings: {
    bullet: '*',
  },
  plugins: [
    // remarkGfm ok for: autolink literals
    // remarkGfm is buggy for: footnote, strikethrough, tables,todolist
    [remarkGfm],

    // validate links between files & chapters
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

    // replace text with autolink (alt: remark-linkify-regex)
    [remarkAutolinkReferences, {
      prefix: 'JIRA-',
      url: 'https://MYJIRALINK.com/browse/JIRA-<num>'
    }],

    // validate broken references
    [remarkLintNoUndefinedReferences, ['error']],
    // avoid non-english characters in filenames
    [remarkLintNoFileNameIrregularCharacters, ['error', /[^\.a-zA-Z0-9-_]/]],

    // (keep to end)
    //(not using rehype now) [...markdownToHTMLPlugins]
  ]
}
