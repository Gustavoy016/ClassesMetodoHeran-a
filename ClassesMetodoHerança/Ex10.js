class Lampada {
  constructor() {
    this.ligada = false;
  }

  ligar() {
    this.ligada = true;
  }

  desligar() {
    this.ligada = false;
  }
}

const lampada = new Lampada();