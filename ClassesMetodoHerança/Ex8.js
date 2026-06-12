// Instância de Animal: Crie uma classe Animal e instancie três animais diferentes (cachorro, gato, pássaro).

class Animal {
  constructor(nome, especie) {
    this.nome = nome;
    this.especie = especie;
  }
}

const cachorro = new Animal("Rex", "Cachorro");
const gato = new Animal("Mingau", "Gato");
const passaro = new Animal("Piu", "Pássaro");
