class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  transferir(valor, contaDestino) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      contaDestino.saldo += valor;
    }
  }
}