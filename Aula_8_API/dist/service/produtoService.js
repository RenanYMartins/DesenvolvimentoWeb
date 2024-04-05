"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const produto_models_1 = require("../models/produto_models");
const ProdutoRepository_1 = require("../repository/ProdutoRepository");
class ProdutoService {
    constructor() {
        this.produtoRepository = new ProdutoRepository_1.ProdutoRepository();
    }
    cadastrarProduto(produtoData) {
        const { id, name, description, price } = produtoData;
        if (!id || !name || !description || !price) {
            throw new Error("Informações incompletas!");
        }
        const novoProduto = new produto_models_1.Produto(id, name, description, price);
        this.produtoRepository.addProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id) {
        const numeroId = parseInt(id, 10);
        console.log(id);
        return this.produtoRepository.getProdutoId(numeroId);
    }
    getProdutos() {
        return this.produtoRepository.getTodosProdutos();
    }
}
exports.ProdutoService = ProdutoService;
