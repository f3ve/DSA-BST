const BinarySearchTree = require('./BinarySearchTree')

function main() {
  const BST  = new BinarySearchTree()

  BST.insert(3, 3)
  BST.insert(1, 1)
  BST.insert(4, 4)
  BST.insert(6, 6)
  BST.insert(9, 9)
  BST.insert(2, 2)
  BST.insert(5, 5)
  BST.insert(7, 7)
  
  //this function returns the sum of all the values in the tree. 
  function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
  }

  function treeHeight(t) {
    let tick = 0
    let numOfNodes = 0
    
    if(!t) {
      tick++
      return 0
    }
    
    while(t !== null) {

      if(t.left && t.right) {
        console.log('both')
        tick++
        numOfNodes += 2
        
        treeHeight(t.left)
        treeHeight(t.right)
      } 
      
      if (t.left && !t.right) {
        console.log('just left')
        tick++
        numOfNodes++
        treeHeight(t.left)
      } 
      
      if (t.right && !t.right) {
        console.log('just right')
        tick++
        numOfNodes++
        treeHeight(t.right)
      }
      
      const maxHeight = numOfNodes - 1
      const minHeight = Math.log2(numOfNodes)
    }
      
      return {
        maxHeight,
      minHeight,
      tick,
      numOfNodes
    }
  }

  function isBST(t) {

    if (t.left > t || t.right < t) {
      console.log('oops')
      return false
    } else if (t.left && t.right) {
      console.log('here')
      isBST(t.left)
      isBST(t.right)
    } else if (t.left && !t.right) {
      console.log('here1')
      isBST(t.left)
    } else if (t.right && !t.left) {
      console.log('here2')
      isBST(t.right)
    } 

    return true
  }

  console.log(isBST('yeet'))
}

main()