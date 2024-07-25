import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta";

export class TipoContaRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS TIPO_CONTAS(
            id INT PRIMARY KEY  AUTO_INCREMENT,
            descricao VARCHAR(255),
            codigo_tipo_conta VARCHAR(50) UNIQUE
        );`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log("Query executada com sucesso: ", resultado);
        } catch (err) {
            console.log("Error");
        } 
    }

    async insertTipoConta(descricao: string, codigo_tipo_conta: string) : Promise<TipoConta> {
        const query = "INSERT INTO CONTA.TIPO_CONTAS (descricao, codigo_tipo_conta) VALUES (?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [descricao, codigo_tipo_conta]);
            console.log("Conta criada com sucesso, ID: ", resultado.id);
            const tipoConta = new TipoConta(resultado.id, descricao, parseInt(codigo_tipo_conta));
            return new Promise<TipoConta>((resolve) => {
                resolve(tipoConta);
            })
        } catch (err) {
            console.error('Erro ao inserir o tipo de conta:', err);
            throw err;
        }
    }


}