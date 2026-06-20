import model from "../models/potion.model.js";

function findAll(request, response) {
    model.findAll()
        .then( res => response.send(res).status(200) )
        .catch( e => response.send(e).status(500) );
}

function create(request, response) {
    model.create({
        name: request.body.name,
        description: request.body.description,
        photo: request.body.photo,
        price: request.body.price
    }).then( res => response.status(201).send(res) )
    .catch( e => response.status(500).send(e) );
}

export default { findAll, create };