// Exercicio 1
// Crie uma função que receba uma lista de números como parâmetro e retorne o maior número da lista
function maiorNumero(...valor:number[]):number{
    let res:number=valor[0];
    for(let i=0; i<valor.length; i++)
    {
        if(valor[i] > res){
            res = valor[i];
        }
    }
    return res;
}

//console.log(maiorNumero(1, 5, 2222, 330, 500));
console.log(maiorNumero(-10, -5));

// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
function imparPar(numero:number):boolean{
    if(numero % 2 == 0)
        return true;
    return false;
}

console.log(imparPar(4));

