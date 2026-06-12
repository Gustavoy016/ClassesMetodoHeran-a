// Veículos: Classe Veiculo com método mover(). Subclasses Aviao e Carro que exibem mensagens diferentes ao mover.
class Veiculo {
  mover() {
    console.log("O veículo está se movendo.");
  }
}

class Aviao extends Veiculo {
  mover() {
    console.log("O avião está voando.");
  }
}

class Carro extends Veiculo {
  mover() {
    console.log("O carro está andando.");
  }
}

const aviao = new Aviao();
const carro = new Carro();