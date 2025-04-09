class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


let root = new TreeNode(1);
root.left = new TreeNode(12);
root.right = new TreeNode(9);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(6);

console.log(root);

function postOrderTraversal(root){
    if(!root){
        return null
    }

    postOrderTraversal(root.left)
    postOrderTraversal(root.right)
    console.log(root.val)
}

function preOrderTraversal(root){
    if(!root){
        return null
    }
    console.log(root.val)
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
    
}

function inOrderTraversal(root){
    if(!root){
        return null
    }
    inOrderTraversal(root.left)
    console.log(root.val)
    inOrderTraversal(root.right)
    
}

inOrderTraversal(root)
