/*
1. Implemente o método `find`, que deve buscar por um nó na Árvore de Busca Binária
2. EXTRA: Implemente o método `delete`, que remove um nó da árvore. (Cuidado para preservar
as restrições da árvore de busca binária!).
*/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    toString() {
        return `${this.value}`;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this._insertNode(this.root, value);
        }
    }

    _insertNode(node, value) {
        if (node.value < value) {
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                this._insertNode(node.right, value);
            }
        } else {
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                this._insertNode(node.left, value);
            }
        }
    }

    inOrderTraversal() {
        this._inOrder(this.root);
    }

    _inOrder(node) {
        if (node === null) {
            return;
        }

        this._inOrder(node.left);
        console.log(node.value);
        this._inOrder(node.right);
    }

    find(value) {
        // TODO
    }

    delete(value) {
        // TODO
    }
}

let tree = new BinarySearchTree();

tree.insert(23);
tree.insert(34);
tree.insert(25);
tree.insert(12);
tree.insert(10);
tree.insert(11);
tree.insert(16);
tree.insert(40);
tree.insert(31);

tree.inOrderTraversal();