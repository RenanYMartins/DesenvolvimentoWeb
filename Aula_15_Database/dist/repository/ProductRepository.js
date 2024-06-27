"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const mysql_1 = require("../database/mysql");
class ProductRepository {
    imprimeResult(err, result) {
        if (result != undefined) {
            console.log(" Dentro callback ", result);
        }
    }
    createTable() {
        try {
            const result = (0, mysql_1.executarComandoSQL)("CREATE TABLE Vendas.Product(id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(255) NOT NULL , price DECIMAL(10 ,2) NOT NULL)", [], this.imprimeResult);
            console.log("Query executada com sucesso: ", result);
        }
        catch (err) {
            console.log("Erro ao executar query", err);
        }
    }
    insertProduct(name, price) {
        try {
            const resultado = (0, mysql_1.executarComandoSQL)(" INSERT INTO vendas.product(name, price) VALUES(? , ?)", [name, price], this.imprimeResult);
            console.log('Produto inserido com sucesso :', resultado);
        }
        catch (err) {
            console.error('Erro ao inserir o produto :', err);
        }
    }
    deleteProduct(id) {
        try {
            const resultado = (0, mysql_1.executarComandoSQL)(` DELETE FROM vendas.product WHERE id=?`, [id], this.imprimeResult);
            console.log('Produto deletado com sucesso!');
        }
        catch (err) {
            console.error('Erro ao deletar o produto :', err);
        }
    }
    updateProduct(id, name, price) {
        try {
            const resultado = (0, mysql_1.executarComandoSQL)(` UPDATE vendas.product SET name = ?, price=? WHERE id=?`, [name, price, id], this.imprimeResult);
            console.log('Produto atualizado com sucesso :', resultado);
        }
        catch (err) {
            console.error('Erro ao atualizar o produto :', err);
        }
    }
}
exports.ProductRepository = ProductRepository;
