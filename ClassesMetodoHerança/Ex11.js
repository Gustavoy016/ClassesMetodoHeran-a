// Herança Animal: Crie uma classe Cachorro que herda de Animal. Sobrescreva um método emitirSom() para retornar "Latido".

class Animal {
  emitirSom() {
    return "Som genérico";
  }
}

class Cachorro extends Animal {
  emitirSom() {
    return "Latido";
  }
}

const cachorro = new Cachorro();