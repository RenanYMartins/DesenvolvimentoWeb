import express, {Request, Response} from "express";
import { ProdutoService } from "../service/produtoService";
const produtoService = new ProdutoService;

export function addProduto(req: Request, res: Response){
    try {
        const novoProduto = produtoService.cadastrarProduto(req.body);
        res.status(200).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                produto:novoProduto
            }
        );
    }
    catch (error: any){
        res.status(400).json({message: error.message});
    }
}


// unction hello(req: Request, res: Response){
//     //res.send("Hello World");
//     res.status(201).json({mensagem: "Hello World"});
// // }

// app.get("/api/hello", hello);

// app.listen(PORT, appLog);

// function salvarPessoa(req: Request, res: Response){
//     const pessoa:Pessoa = req.body;
//     return res.status(200).json({mensagem: "Operação efetuada com sucesso!", pessoa: pessoa})
// }

// app.get("/api/pessoa", salvarPessoa);

// let produtos:Produto[] = [];

// function addProduct(req: Request, res: Response){
//     const produto:Produto = req.body;
//     produtos.push(produto);
//     return res.status(200).json({mensagem: "Produto adicionado com sucesso!"})
// }

// function searchProduct(req: Request, res: Response){
//     const name = req.params.name;
//     const id = req.params.id;
//     const produto:Produto|undefined = produtos.find((item) => String(item.id) == req.params.id )
//     if(produto){
//         res.status(200).json(produto);
//     }
//     res.status(400).json({mensagem: "Produto não encontrado!"});
//     return;
    
// }

// function searchAllProducts(req: Request, res: Response){
//     try{
//         res.status(200).json(produtos);
//     } catch(error:any){
//         res.status(400).json({mensagem: "Não há produtos cadastrados para serem exibidos!"});
//     }
// }