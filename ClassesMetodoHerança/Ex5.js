// Alterando Atributos: Crie uma classe Produto e um método aplicarDesconto(porcentagem) que altere o preço original.

class Produto {

    constructor(nome, preco) {

        this.nome = nome;
this.preco = preco;

    }

aplicarDesconto(porcentagem) {

        this.preco -= this.preco * (porcentagem / 100);

    }

}