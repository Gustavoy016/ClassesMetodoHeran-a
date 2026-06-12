class Elevador {
  constructor(totalAndares, capacidade) {
    this.andarAtual = 0;
    this.totalAndares = totalAndares;
    this.capacidade = capacidade;
    this.pessoas = 0;
  }

  subir() {
    if (this.andarAtual < this.totalAndares) {
      this.andarAtual++;
    }
  }

  descer() {
    if (this.andarAtual > 0) {
      this.andarAtual--;
    }
  }

  entrarPessoas(qtd) {
    if (this.pessoas + qtd <= this.capacidade) {
      this.pessoas += qtd;
    } else {
      console.log("Capacidade excedida");
    }
  }
}