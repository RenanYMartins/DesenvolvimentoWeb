var Calculadora = /** @class */ (function () {
    function Calculadora(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    Object.defineProperty(Calculadora.prototype, "getValor1", {
        get: function () {
            return this.valor1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "getValor2", {
        get: function () {
            return this.valor2;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.soma = function () {
        return this.valor1 + this.valor2;
    };
    Calculadora.prototype.subtrair = function () {
        return this.valor1 - this.valor2;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.valor1 * this.valor2;
    };
    Calculadora.prototype.dividir = function () {
        if (this.valor2 != 0)
            return this.valor1 / this.valor2;
        throw new Error("Número não pode ser divido por zero");
    };
    Calculadora.prototype.porcentagem = function () {
        return (this.valor1 / 100) * this.valor2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(20, 5);
console.log("Soma: ", calculadora.soma());
console.log("Subtração: ", calculadora.subtrair());
console.log("Multiplicação: ", calculadora.multiplicar());
console.log("Divisão: ", calculadora.dividir());
console.log("Porcentagem: ", calculadora.porcentagem());
