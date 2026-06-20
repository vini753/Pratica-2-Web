import express from "express";
import router from "./routes/api.routes.js";
import Potion from "./models/potion.model.js";

try {
    await Potion.sync();
} catch (error) {
    console.log("Erro ao sincronizar o banco de dados: ", error);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(3000, () => console.log('rodando na porta 3000'));