import { Model, DataTypes } from "sequelize";
import sequelize from "./dbconfig.js";

class Potion extends Model {};

Potion.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false }
}, {sequelize: sequelize, timestamps: false });

export default Potion;