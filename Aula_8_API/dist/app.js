"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
function appLog() {
    console.log("A API se encontra disponível no URL: http://localhost:3000");
}
function hello(req, res) {
    //res.send("Hello World");
    res.status(201).json({ mensagem: "Hello World" });
}
app.get("/api/hello", hello);
app.listen(PORT, appLog);
function salvarPessoa(req, res) {
    const pessoa = req.body;
    return res.status(200).json({ mensagem: "Operação efetuada com sucesso!", pessoa: pessoa });
}
app.get("/api/pessoa", salvarPessoa);
let produtos = [];
function addProduct(req, res) {
    const produto = req.body;
    produtos.push(produto);
    return res.status(200).json({ mensagem: "Produto adicionado com sucesso!" });
}
function searchProduct(req, res) {
    const produto = produtos.find((item) => String(item.id) == req.params.id);
    if (produto) {
        res.status(200).json(produto);
    }
    res.status(400).json({ mensagem: "Produto não encontrado!" });
    return;
}
app.post("/api/produto/add", addProduct);
app.get("/api/produto/:id", searchProduct);
