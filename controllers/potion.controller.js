import { response } from "express";
import model from "../models/potion.model.js";

function findAll(request, response) {
    const potions = model.findAll();
    response.status(200).send(potions);
}

function findById(request, response) {
    const id = request.params.id;
    const potion = model.findOne(id);
    response.status(200).send(potion);
}

function create(request, response) {
    const data = request.body;
    const result = model.create(data);
    response.status(201).send(result);
}

export default { findAll, findById, create }