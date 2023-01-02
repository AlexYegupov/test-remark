//import visit from 'unist-util-visit'
const visit = require('unist-util-visit')

const exp = () => tree => {
  visit(tree, 'heading', node => {
    if (node.depth !== 1) {
      return
    }

    visit(node, 'text', textNode => {
      textNode.value = 'BREAKING ' + textNode.value
    })
  })
}


module.exports = exp

