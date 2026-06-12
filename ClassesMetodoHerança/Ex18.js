class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}

class Professor extends Usuario {
  lancarNota() {
    console.log("Nota lançada");
  }
}

class Aluno extends Usuario {
  entregarTrabalho() {
    console.log("Trabalho entregue");
  }
}