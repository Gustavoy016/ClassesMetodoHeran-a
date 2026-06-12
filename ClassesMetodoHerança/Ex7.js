// Conversor de Temperatura: Classe Temperatura com um método paraFahrenheit() que converte o valor em Celsius guardado no objeto.

class Temperatura {

constructor(celsius) { this.celsius = celsius; }

paraFahrenheit() { return (this.celsius * 9/5) + 32; }

}