class Calculadora{
    private valor1:number
    private valor2: number

    constructor(valor1:number, valor2:number) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    get getValor1():number{
        return this.valor1;
    }

    get getValor2():number{
        return this.valor2;
    }

    soma():number{
        return this.valor1 + this.valor2;
    }

    subtrair():number{
        return this.valor1 - this.valor2;
    }

    multiplicar():number{
        return this.valor1 * this.valor2;
    }

    dividir():number{
        if(this.valor2 != 0)
            return this.valor1 / this.valor2;
        throw new Error("Número não pode ser divido por zero");
    }
    
    porcentagem():number{
        return (this.valor1/100)*this.valor2;
    }
}

const calculadora = new Calculadora(20, 5);

console.log("Soma: ", calculadora.soma());

console.log("Subtração: ", calculadora.subtrair());

console.log("Multiplicação: ", calculadora.multiplicar());

console.log("Divisão: ", calculadora.dividir());

console.log("Porcentagem: ", calculadora.porcentagem());