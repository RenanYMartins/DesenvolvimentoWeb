// Exercicio 1
// Crie uma função que receba uma lista de números como parâmetro e retorne o maior número da lista
function maiorNumero() {
    var valor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valor[_i] = arguments[_i];
    }
    var res = valor[0];
    for (var i = 0; i < valor.length; i++) {
        if (valor[i] > res) {
            res = valor[i];
        }
    }
    return res;
}
//console.log(maiorNumero(1, 5, 2222, 330, 500));
console.log(maiorNumero(-10, -5));
// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
function imparPar(numero) {
    if (numero % 2 == 0)
        return true;
    return false;
}
console.log(imparPar(4));
