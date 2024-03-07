class Carro {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
  
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }
  
    exibirInfo(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }

    idadeCarro():void {
      const date = new Date();
      let idade:number = date.getFullYear() - this.ano;
      console.log(`Idade do carro: ${idade}`);
    }
  }
  
  const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
  
  meuCarro.exibirInfo();

  meuCarro.idadeCarro();