// Sistema Bancário: Classe Conta e subclasse ContaPoupanca. A poupança deve ter um método aplicarJuros().

class Conta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    this.saldo -= valor;
  }
}

class ContaPoupanca extends Conta {
  aplicarJuros(taxa) {
    this.saldo += this.saldo * (taxa / 100);
  }
}

const conta = new ContaPoupanca("Gustavo", 1000);

conta.aplicarJuros(5);