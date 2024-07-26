import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta";

export class TipoContaRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS banco.TIPO_CONTAS(
            id INT PRIMARY KEY AUTO_INCREMENT,
            descricao VARCHAR(255) NOT NULL,
            codigo_tipo_conta BIGINT NOT NULL
        );`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log("Query executada com sucesso: ", resultado);
        } catch (err) {
            console.log("Error");
        } 
    }

    async insertTipoConta(descricao: string, codigo_tipo_conta: string) : Promise<TipoConta> {
        const query = "INSERT INTO banco.TIPO_CONTAS (descricao, codigo_tipo_conta) VALUES (?, ?)";

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

    async filtrarTipoContas(): Promise<TipoConta[]> {
        const query = "SELECT * FROM banco.TIPO_CONTAS";

        try{
            const resultado = await executarComandoSQL(query, []);
            return new Promise<TipoConta[]>((resolve)=> {
                resolve(resultado);
            })
        } catch (err) {
            console.error(`Falha ao listar todos os tipos de conta gerando o erro: ${err}`);
            throw err;
        }
    }

    async getTipoContaByIdOrDescricaoOrCodigo(id?: number, descricao?: string, codigoTipoConta?: number): Promise<TipoConta[]> {
        let query = "SELECT * FROM banco.tipo_contas WHERE";
        const params: any[] = [];

        if(descricao) {
            query += " descricao = ?";
            params.push(descricao);
        }

        if(codigoTipoConta) {
            query += (params.length ? " AND": "") + " codigo_tipo_conta = ?";
            params.push(codigoTipoConta);
        }

        if(id) {
            query += (params.length ? " AND" : "") + " id = ?";
            params.push(id);
        }

        if(params.length === 0){
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido.");
        }

        try {
            const resultado: TipoConta[] = await executarComandoSQL(query, params);
            console.log("Busca efetuada com sucesso: ", resultado);
            return resultado;
        } catch(err) {
            console.log("Erro ao buscar tipo de conta: ", err);
            throw err;
        }
    }

    async updateTipoConta(tipoConta: TipoConta): Promise<void> {
        try {
            const query = "UPDATE banco.tipo_contas SET descricao = ?, codigo_tipo_conta = ? WHERE id = ?";
            await executarComandoSQL(query, [tipoConta.descricao, tipoConta.codigoTipoConta, tipoConta.id]);
            console.log("Tipo de conta atualizado com sucesso: ", tipoConta.id);
        } catch (err) {
            console.log("Erro ao atualizar tipo de conta: ", err);
            throw err;
        }
    }


}