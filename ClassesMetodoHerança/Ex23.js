class Personagem {
  constructor(nome, vida, ataque) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacar(inimigo) {
    inimigo.vida -= this.ataque;
  }
}