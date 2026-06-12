// Filme: Classe Filme com titulo e anoLancamento. Verifique se o filme tem mais de 10 anos em um método.

class Filme {
  constructor(titulo, anoLancamento) {
    this.titulo = titulo;
    this.anoLancamento = anoLancamento;
  }

  temMaisDe10Anos() {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.anoLancamento > 10;
  }
}

const filme1 = new Filme("Avatar", 2009);
const filme2 = new Filme("Duna: Parte 2", 2024);

