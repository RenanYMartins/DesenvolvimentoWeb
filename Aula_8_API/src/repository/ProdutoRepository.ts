import { Produto } from "../models/produto_models";

export class ProdutoRepository {
    productList: Produto[] = [];

    addProduto(produto: Produto){
        this.productList.push(produto);
    }

    getProdutoId(id:number): Produto|undefined {
        return this.productList.find(product => product.id === id);
    }

    getTodosProdutos():Produto[]{
        return this.productList;
    }
}