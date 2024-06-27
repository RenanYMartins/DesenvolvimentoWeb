"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dbConfigs = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'vendas'
};
const mysqlConnection = mysql2_1.default.createConnection(dbConfigs);
mysqlConnection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar com o Banco de Dados', err);
        throw err;
    }
    console.log("Conexão com  banco foi bem sucedida!");
});
