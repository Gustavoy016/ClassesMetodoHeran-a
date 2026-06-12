class Contato {
  constructor(nome) {
    this.nome = nome;
  }
}

class Agenda {
  constructor() {
    this.contatos = [];
  }

  excluirContato(nome) {
    this.contatos = this.contatos.filter(
      contato => contato.nome !== nome
    );
  }
}