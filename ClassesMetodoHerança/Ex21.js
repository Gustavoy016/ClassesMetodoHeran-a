class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  calcularTotal() {
    let total = 0;

    for (let produto of this.produtos) {
      total += produto.preco;
    }

    return total;
  }
}