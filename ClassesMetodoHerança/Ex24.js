class Veiculo {
  constructor(nome, manutencao) {
    this.nome = nome;
    this.manutencao = manutencao;
  }
}

class Empresa {
  constructor() {
    this.veiculos = [];
  }

  listarManutencao() {
    return this.veiculos.filter(
      veiculo => veiculo.manutencao
    );
  }
}