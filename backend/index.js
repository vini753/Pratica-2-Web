import express from "express";
import router from "./routes/api.routes.js";
import Potion from "./models/potion.model.js";
import sequelize from "./models/dbconfig.js";
import cors from "cors";
import initialPotions from "./initialPotions.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

// Sincroniza o banco de dados
sequelize.sync({ force: true })
    .then(async () => {
        console.log("Banco de dados sincronizado");

        try {
            // Insere as poções no banco
            await Potion.bulkCreate(initialPotions);
            console.log("Banco de dados populado");
        } catch (error) {
            console.error("Erro ao popular o banco de dados: ", error);
        }

        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
    })
    .catch((error) => {
        console.error("Erro ao conectar ao banco: ", error);
    });