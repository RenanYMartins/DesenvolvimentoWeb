class Calculadora{
    valor1:number
    valor2: number

    constructor(valor1:number, valor2:number) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    soma(valor1:number, valor2:number):number{
        return valor1 + valor2;
    }

    subtrair(valor1:number, valor2:number):number{
        return valor1 - valor2;
    }

    multiplicar(valor1:number, valor2:number):number{
        return valor1 * valor2;
    }

    dividir(valor1:number, valor2:number):number{
        return valor1 / valor2;
    }
}

const calculadora = new Calculadora(10, 5);

console.log(calculadora.soma(10, 2));

console.log(calculadora.subtrair(6, 1));

console.log(calculadora.multiplicar(10, 5));

console.log(calculadora.dividir(10, 2));