const db = require("../models");
const Categoria = db.categorias;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.nome || !req.body.descricao) {
        res.status(400).send({ message: "Nome ou Descrição Vazio!" });
        return;
    }

    const cat = new Categoria({
        nome: req.body.nome,
        descricao: req.body.descricao
    });


    cat.save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    res.send("{teste:0}");
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};