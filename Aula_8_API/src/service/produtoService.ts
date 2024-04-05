import { Produto } from "../models/produto_models";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoService {
    produtoRepository: ProdutoRepository = new ProdutoRepository();

    cadastrarProduto(produtoData: any): Produto {
        const { id, name, description, price } = produtoData;
        if(!id || !name || !description || !price ){
            throw new Error("Informações incompletas!");
        }
        const novoProduto = new Produto(id, name, description, price);
        this.produtoRepository.addProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any): Produto|undefined {
        const numeroId: number = parseInt(id, 10);
        console.log(id);
        return this.produtoRepository.getProdutoId(numeroId);
    }

    getProdutos():Produto[]{
        return this.produtoRepository.getTodosProdutos();
    }
}