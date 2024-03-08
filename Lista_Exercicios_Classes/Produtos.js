var Produtos = /** @class */ (function () {
    function Produtos(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    Object.defineProperty(Produtos.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Produtos.prototype.calcularValorTotalEmEstoque = function () {
        return this.quantidadeEmEstoque * this.preco;
    };
    Produtos.prototype.reporEstoque = function (quantidade) {
        return this.quantidadeEmEstoque += quantidade;
    };
    Produtos.prototype.vender = function (quantidade) {
        if (quantidade > this.quantidadeEmEstoque)
            throw new Error("Quantidade solicitada é maior do que a disponível");
        return this.quantidadeEmEstoque -= quantidade;
    };
    return Produtos;
}());
var produto = new Produtos("Iphone X", 2000, 1);
console.log("Quantidade total em estoque: ", produto.calcularValorTotalEmEstoque());
console.log("Adição no estoque: ", produto.reporEstoque(5));
console.log("Venda realizada. Nova quantidade do estoque: ", produto.vender(7));
