// Construtor Pai: Na classe Gerente, use super() para passar o nome e salário para o construtor da classe Funcionario.


class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario); // chama o construtor da classe Funcionario
    this.departamento = departamento;
  }
}

const gerente = new Gerente("Gustavo", 8000, "TI");