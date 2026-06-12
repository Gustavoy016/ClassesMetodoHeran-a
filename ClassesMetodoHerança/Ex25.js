class Funcionario {
  constructor(salario) {
    this.salario = salario;
  }

  calcularSalario() {
    return this.salario;
  }
}

class Vendedor extends Funcionario {
  constructor(salario, comissao) {
    super(salario);
    this.comissao = comissao;
  }

  calcularSalario() {
    return this.salario + this.comissao;
  }
}

class Diretor extends Funcionario {
  constructor(salario, bonus) {
    super(salario);
    this.bonus = bonus;
  }

  calcularSalario() {
    return this.salario + this.bonus;
  }
}