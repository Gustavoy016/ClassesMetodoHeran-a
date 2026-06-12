class Estacionamento {
  constructor(limite) {
    this.limite = limite;
    this.veiculos = [];
  }

  estacionar(veiculo) {
    if (this.veiculos.length < this.limite) {
      this.veiculos.push(veiculo);
    } else {
      console.log("Estacionamento lotado");
    }
  }
}