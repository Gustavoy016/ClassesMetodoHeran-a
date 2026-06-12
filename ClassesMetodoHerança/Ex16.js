class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente!");
    }
  }
}