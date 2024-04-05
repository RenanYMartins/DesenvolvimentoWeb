"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
class ProdutoRepository {
    constructor() {
        this.productList = [];
    }
    addProduto(produto) {
        this.productList.push(produto);
    }
    getProdutoId(id) {
        return this.productList.find(product => product.id === id);
    }
    getTodosProdutos() {
        return this.productList;
    }
}
exports.ProdutoRepository = ProdutoRepository;
