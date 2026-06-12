class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  buscarPorAutor(nome) {
    return this.livros.filter(
      livro => livro.autor === nome
    );
  }
}