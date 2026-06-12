class Musica {
  constructor(nome, duracao) {
    this.nome = nome;
    this.duracao = duracao;
  }
}

class Playlist {
  constructor() {
    this.musicas = [];
  }

  ordenarPorDuracao() {
    this.musicas.sort(
      (a, b) => a.duracao - b.duracao
    );
  }
}