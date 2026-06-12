// Classe Carro: Adicione um atributo velocidade inicializado em 0. Crie um método acelerar() que aumente a velocidade em 10.

class Carro {

    constructor(marca) {
        this.marca = marca;
        this.velocidade = 0;

    }

acelerar() { this.velocidade += 10; }

}