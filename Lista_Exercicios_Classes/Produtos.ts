class Produtos{
    nome:string;
    preco:number;
    quantidadeEmEstoque:number;

    get getNome(){
        return this.nome;
    }

    get getPreco(){
        return this.preco;
    }

    constructor(nome:string, preco:number, quantidadeEmEstoque:number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    calcularValorTotalEmEstoque():number{
        return this.quantidadeEmEstoque * this.preco;
    }

    reporEstoque(quantidade: number){
        return this.quantidadeEmEstoque += quantidade;
    }

    vender(quantidade:number){
        if(quantidade > this.quantidadeEmEstoque)
            throw new Error("Quantidade solicitada é maior do que a disponível");
        return this.quantidadeEmEstoque -= quantidade;
    }
}

const produto = new Produtos("Iphone X", 2000, 1);

console.log("Quantidade total em estoque: ", produto.calcularValorTotalEmEstoque());

console.log("Adição no estoque: ", produto.reporEstoque(5));

console.log("Venda realizada. Nova quantidade do estoque: ", produto.vender(7));