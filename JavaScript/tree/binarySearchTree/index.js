// TreeNode class to represent each node in the tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree (BST) class with insert, search, and traversal methods
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the BST
    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // Search for a value in the BST
    search(value) {
        let current = this.root;

        while (current) {
            if (value === current.value) return true;
            if (value < current.value) current = current.left;
            else current = current.right;
        }

        return false;
    }
}

// Traversal class to handle different types of tree traversals
class Traversal {
    // Inorder Traversal (Left, Root, Right)
    inorder(node) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    // Preorder Traversal (Root, Left, Right)
    preorder(node) {
        if (node) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Postorder Traversal (Left, Right, Root)
    postorder(node) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }
}

// Example Usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log('Search for 7:', bst.search(7));  // Output: true
console.log('Search for 20:', bst.search(20)); // Output: false

const traversal = new Traversal();
console.log('Inorder Traversal:');
traversal.inorder(bst.root);  // Outputs: 3, 5, 7, 10, 15

console.log('Preorder Traversal:');
traversal.preorder(bst.root);  // Outputs: 10, 5, 3, 7, 15

console.log('Postorder Traversal:');
traversal.postorder(bst.root); // Outputs: 3, 7, 5, 15, 10
