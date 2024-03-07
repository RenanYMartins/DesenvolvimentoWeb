var Calculadora = /** @class */ (function () {
    function Calculadora(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    Calculadora.prototype.soma = function (valor1, valor2) {
        return valor1 + valor2;
    };
    Calculadora.prototype.subtrair = function (valor1, valor2) {
        return valor1 - valor2;
    };
    Calculadora.prototype.multiplicar = function (valor1, valor2) {
        return valor1 * valor2;
    };
    Calculadora.prototype.dividir = function (valor1, valor2) {
        return valor1 / valor2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(10, 5);
console.log(calculadora.soma(10, 2));
console.log(calculadora.subtrair(6, 1));
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 2));
