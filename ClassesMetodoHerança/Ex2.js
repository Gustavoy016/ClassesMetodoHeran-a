// Método de Saudação: Na classe Pessoa, crie um método falar() que exiba "Olá, meu nome é [nome]".

class Pessoa {

    constructor(nome) { this.nome = nome; }

falar() { console.log(`Olá, meu nome é ${this.nome}`); }

}