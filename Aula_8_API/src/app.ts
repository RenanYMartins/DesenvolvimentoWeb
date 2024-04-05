import express, {Request, Response} from "express";
import {Pessoa} from "./models/Pessoa.js";
import { Produto } from "./models/produto_models.js";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

function appLog(){
    console.log("A API se encontra disponível no URL: http://localhost:3000");
}

function hello(req: Request, res: Response){
    //res.send("Hello World");
    res.status(201).json({mensagem: "Hello World"});
}

app.get("/api/hello", hello);

app.listen(PORT, appLog);

function salvarPessoa(req: Request, res: Response){
    const pessoa:Pessoa = req.body;
    return res.status(200).json({mensagem: "Operação efetuada com sucesso!", pessoa: pessoa})
}

app.get("/api/pessoa", salvarPessoa);

let produtos:Produto[] = [];

function addProduct(req: Request, res: Response){
    const produto:Produto = req.body;
    produtos.push(produto);
    return res.status(200).json({mensagem: "Produto adicionado com sucesso!"})
}

function searchProduct(req: Request, res: Response){
    const produto:Produto|undefined = produtos.find((item) => String(item.id) == req.params.id )
    if(produto){
        res.status(200).json(produto);
    }
    res.status(400).json({mensagem: "Produto não encontrado!"});
    return;
    
}

function searchAllProducts(req: Request, res: Response){
    res.status(200).json(produtos);
}

app.post("/api/produto/add", addProduct);
app.get("/api/produto/:id", searchProduct);
app.get("/api/produto", searchAllProducts);
