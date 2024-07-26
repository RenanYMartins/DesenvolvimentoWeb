// import { cadastrarConta, deletaConta, getConta, getContas, updateConta } from "./controller/ContaController";
import { cadastrarTipoConta, getTiposConta, getTipoConta, updateTipoConta} from "./controller/TipoContaController";
import express from "express"

const app = express();
const PORT = 3040;

app.use(express.json());

// app.post("/api/conta", cadastrarConta);
// app.put("/api/conta", updateConta);
// app.delete("/api/conta",deletaConta)
// app.get("/api/conta",getConta)
// app.get("/api/conta/all",getContas)

app.post("/api/banco/tipoConta", cadastrarTipoConta);
app.get("/api/banco/tipoConta/all",getTiposConta)
app.get("/api/banco/tipoConta",getTipoConta);
app.put("/api/banco/tipoConta", updateTipoConta);
// app.delete("/api/banco/tipoConta",deletaTipoConta)


app.listen(PORT, ()=>{console.log("API rodando na PORTA 3040")})