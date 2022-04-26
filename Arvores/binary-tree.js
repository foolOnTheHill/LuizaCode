class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    visit(node) {
        // qualquer lógica em cima do nó
        console.log(node.value);
    }

    aux_print(node) {
        if (node === null) {
            return;
        }
        this.aux_print(node.left);
        this.aux_print(node.right);
        this.visit(node);
    }

    print() {
        this.aux_print(this);
    }
}

const root = new Node(32);
root.left = new Node(12);
root.right = new Node(9);

root.print()