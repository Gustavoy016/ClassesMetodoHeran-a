class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }
}

class CarroEletrico extends Carro {
  constructor(modelo, bateria) {
    super(modelo);
    this.bateria = bateria;
  }
}