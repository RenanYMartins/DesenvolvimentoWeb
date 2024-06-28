import { executarComandoSQL, tableExist } from "../database/mysql";

export class ProductRepository {

    async createTable() {
        const query = `
        CREATE TABLE Vendas.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL
        )`;

        try {
            if (await tableExist('product')) {
                console.log("A tabela já existe!");
            } else {
                const resultado = executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    insertProduct(name: string, price: number) {
        const query = `
        INSERT INTO vendas.Product (name, price) VALUES (?, ?)`;

        try {
            const resultado = executarComandoSQL(query, [name, price]);
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
        }
    }

}