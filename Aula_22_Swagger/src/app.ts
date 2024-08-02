import express from 'express';
import { RegisterRoutes } from './route/routes';
import { setupSwagger } from './config/swagger';


const app = express();

const PORT = 3040;

const apiRouter = express.Router();
RegisterRoutes(apiRouter);

app.use('/api', apiRouter);

RegisterRoutes(app);

setupSwagger(app);

app.use(express.json());

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));