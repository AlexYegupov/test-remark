import visit from 'unist-util-visit'

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

console.log(111111)
export default exp


/*
   const visit = require('unist-util-visit')

   module.exports = () => tree => {
   visit(tree, 'heading', node => {
   if (node.depth !== 1) {
   return
   }

   visit(node, 'text', textNode => {
   textNode.value = 'BREAKING ' + textNode.value
   })
   })
   } */
