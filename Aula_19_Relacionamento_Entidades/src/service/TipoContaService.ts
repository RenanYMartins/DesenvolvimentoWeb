import { TipoConta } from "../model/TipoConta";
import { TipoContaRepository } from "../repository/tipoContaRepository";

export class TipoContaService {
    tipoContaRepository: TipoContaRepository = new TipoContaRepository;

    async criaTipoConta(tipoConta: any): Promise<TipoConta> {
        const { descricao, codigo_tipo_conta} = tipoConta;
        if(!descricao || !codigo_tipo_conta) {
            throw new Error("Informações incompletas");
        }

        const novoTipoConta = await this.tipoContaRepository.insertTipoConta(descricao, codigo_tipo_conta);
        console.log("Insert Service: ", novoTipoConta);
        return novoTipoConta;
    }
}