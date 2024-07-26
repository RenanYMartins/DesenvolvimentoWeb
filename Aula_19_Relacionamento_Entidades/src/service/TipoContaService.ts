import { TipoConta } from "../model/TipoConta";
import { TipoContaRepository } from "../repository/tipoContaRepository";

export class TipoContaService {
    tipoContaRepository: TipoContaRepository = new TipoContaRepository;

    async criaTipoConta(tipoConta: any): Promise<TipoConta> {
        const { descricao, codigo_tipo_conta} = tipoConta;
        console.log("Service: ", tipoConta);
        if(!descricao || !codigo_tipo_conta) {
            throw new Error("Informações incompletas");
        }

        const novoTipoConta = await this.tipoContaRepository.insertTipoConta(descricao, codigo_tipo_conta);
        console.log("Insert Service: ", novoTipoConta);
        return novoTipoConta;
    }

    async getTiposConta(): Promise<TipoConta[]> {
        const tipoConta = await this.tipoContaRepository.filtrarTipoContas();
        return tipoConta;
    }

    async getTipoConta(id?: any, descricao?: any, codigo_tipo_conta?: any): Promise<TipoConta[]> {
        const tipoConta = await this.tipoContaRepository.getTipoContaByIdOrDescricaoOrCodigo(id, descricao, codigo_tipo_conta);
        return tipoConta;
    }

    async atualizaTipoConta(tipoConta: TipoConta): Promise<TipoConta> {
        console.log(tipoConta instanceof TipoConta);

        if(!tipoConta)
            throw new Error("O parâmetro passado não é um objeto do tipo conta");

        const resultado: TipoConta[] = await this.tipoContaRepository.getTipoContaByIdOrDescricaoOrCodigo(undefined, undefined, tipoConta.id);

        this.tipoContaRepository.updateTipoConta(tipoConta);
        return tipoConta;
    }

}

