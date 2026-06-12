class ItemPedido {
  constructor(quantidade, preco) {
    this.quantidade = quantidade;
    this.preco = preco;
  }

  calcularTotal() {
    return this.quantidade * this.preco;
  }
}