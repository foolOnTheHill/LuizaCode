/* 1. Implemente uma função que executa uma busca linear sobre um array de um tipo
complexo também criado por você (por exemplo: classe Livro, classe Produto). A
busca deve receber um determinado valor de atributo e utilizar esse valor para
realizar a busca. Por exemplo: busca linear sobre um array de Livro e usando o título
do livro para realizar a comparação.

2. Implemente uma função que executa uma busca binária sobre um array de um tipo
complexo também criado por você (por exemplo: classe Livro, classe Produto). A
busca deve receber um determinado valor de atributo e utilizar esse valor para
realizar a busca. Por exemplo: busca linear sobre um array de Livro e usando o título
do livro para realizar a comparação.

3. Implemente uma função que executa uma busca linear sobre um array de um tipo
complexo também criado por você (por exemplo: classe Livro, classe Produto) e que
retorna um array na resposta com todos os itens que foram encontrados. Por exemplo:
busca sobre um array de Livro e usando o autor como o campo de comparação deve retornar
todos os livros de um mesmo autor. */

class Livro {
    constructor(id, titulo, autor) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
    }

    toString() {
        return `${this.id} - ${this.titulo} - ${this.autor}`;
    }
}

const livros = [
    new Livro(1, "Duna", "Frank Hebert"),
    new Livro(2, "O Messias de Duna", "Frank Hebert"),
    new Livro(3, "Harry Potter e a Pedra Filosofal", "J.K. Rowling"),
    new Livro(4, "Harry Potter e a Câmera Secreta", "J.K. Rowling"),
    new Livro(5, "Harry Potter e o Prisioneiro de Azkaban", "J.K. Rowling")
];

// 1

const linearSearch = (livros, id) => {
    for(let i = 0; i < livros.length; i++) {
        if (livros[i].id == id) {
            return livros[i];
        }
    }
    return null;
}

// 2 

// TODO

// 3

const linearSearchWithResults = (livros, autor) => {
    let results = [];
    for(let i = 0; i < livros.length; i++) {
        if (livros[i].autor == autor) {
            results.push(livros[i]);
        }
    }
    return results;
};

console.log(linearSearchWithResults(livros, "J.K. Rowling").toString());