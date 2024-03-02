// Exercicio 1
// Crie uma função que receba uma lista de números como parâmetro e retorne o maior número da lista
// function maiorNumero(...valor:number[]):number{
//     let res:number=valor[0];
//     for(let i=0; i<valor.length; i++)
//     {
//         if(valor[i] > res){
//             res = valor[i];
//         }
//     }
//     return res;
// }
//console.log(maiorNumero(1, 5, 2222, 330, 500));
// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
// function imparPar(numero:number):boolean{
//     if(numero % 2 == 0)
//         return true;
//     return false;
// }
// console.log(imparPar(4));
// Exercício 3
// Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números
function calcularMedia() {
    var nota = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nota[_i] = arguments[_i];
    }
    var media = 0;
    for (var i = 0; i < nota.length; i++) {
        media = media + nota[i];
    }
    return media / nota.length;
}
console.log(calcularMedia(10, 5, 5.5));
//Exercício 4
// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.
function caixaAlta(palavra) {
    var res = palavra.toUpperCase();
    return res;
}
console.log(caixaAlta("web"));
// Exercício 5 
// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
// function numeroPrimo(numero:number):boolean{
//     let cont = 0;
//     for(let i=1; i<=numero; i++){
//         if(numero % i == 0){
//             cont = cont + 1;
//         }
//     }
//     if(cont == 2)
//         return true;
//     return false;
// }
// console.log(numeroPrimo(7));
// Exercício 6
// Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a ordem de diferentes conjuntos de elementos
function inverterArray() {
    // let vetorAux = vetor.slice()
    // let vetorInvertido = vetorAux.reverse();
    // // console.log(vetorInvertido);
    // return vetorInvertido;
    var vetor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vetor[_i] = arguments[_i];
    }
    return vetor.reverse();
}
console.log(inverterArray([5, 4, 3, 2, 1]));
console.log(inverterArray(['B', 'E', 'W']));
