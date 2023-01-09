import { visit } from 'unist-util-visit'

// see https://github.com/unifiedjs/unified#plugin
const exp = () => (tree, file) => {
  //console.log(`file:`, file.extname)
  //file.extname = '.zzz'

  visit(tree, 'heading', node => {
    if (node.depth !== 1) {
      return
    }

    visit(node, 'text', textNode => {
      textNode.value = 'BREAKING ' + textNode.value
    })
  })
}


export default exp
