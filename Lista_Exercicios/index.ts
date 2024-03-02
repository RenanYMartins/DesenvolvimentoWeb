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

console.log(maiorNumero(1, 5, 2222, 330, 500));

// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
function imparPar(numero:number):boolean{
    if(numero % 2 == 0)
        return true;
    return false;
}

console.log(imparPar(4));

// Exercício 3
// Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números
function calcularMedia(...nota:number[]):number{
    let media:number=0;
    for(let i=0; i<nota.length; i++){
        media = media + nota[i];
    }
    return media/nota.length;
}

console.log(calcularMedia(10, 5, 5.5));

//Exercício 4
// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.
function caixaAlta(palavra:string):string{
    let res  = palavra.toUpperCase();
    return res;
}

console.log(caixaAlta("web"));  

// Exercício 5 
// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
function numeroPrimo(numero:number):boolean{
    let cont = 0;
    for(let i=1; i<=numero; i++){
        if(numero % i == 0){
            cont = cont + 1;
        }
    }
    
    if(cont == 2)
        return true;
    return false;
}

console.log(numeroPrimo(7));

// Exercício 6
// Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a ordem de diferentes conjuntos de elementos
function inverterArray(...vetor:any[]):any[]{
	return vetor.reverse();
}

console.log(inverterArray(5, 4, 3, 2, 1));
console.log(inverterArray('B', 'E', 'W'));

//Exercício 7
// Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada
function calculoPorcentagem(numero:number, porcentagem:number):number{
	return numero*(1+porcentagem/100);
}

console.log(calculoPorcentagem(10, 80));

//Exercício 8
// Crie uma função que receba uma string e retorne a mesma string, mas com as palavras em ordem reversa. 
function inversaoString(palavra:string):string{
	let auxString = palavra.split('').reverse().join('');
	return auxString;
}

console.log(inversaoString('ar condicionado'));
console.log(inversaoString('carro'));

//Exercício 9
// Implemente uma função que retorne a soma de todos os números pares em um arra
function somaPares(...numero:number[]):number{
	let soma= 0;
	for(let i=0; i<numero.length; i++){
		if(numero[i] % 2 == 0)
			soma += numero[i];
	}
	return soma;
}

console.log(somaPares(2, 3, 10, 6, 7, 9));

// Exercício 10
// Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números
function somaFatorial(numero:number):number{
	let res = 1;
	for(let i=numero; i>0; i--){
		res = res * i
	}
	return res;
}

console.log(somaFatorial(5));
console.log(somaFatorial(10));