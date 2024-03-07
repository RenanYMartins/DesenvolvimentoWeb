var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    Carro.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano, ", Cor: ").concat(this.cor));
    };
    Carro.prototype.idadeCarro = function () {
        var date = new Date();
        var idade = date.getFullYear() - this.ano;
        console.log("Idade do carro: ".concat(idade));
    };
    return Carro;
}());
var meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
meuCarro.exibirInfo();
meuCarro.idadeCarro();
