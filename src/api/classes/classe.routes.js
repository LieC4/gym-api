const ClasseRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    getByName,
    update,
    deleteClasse } = require('./classe.controllers');

ClasseRoutes.get('/', getAll)
ClasseRoutes.get('/:id', getById)
ClasseRoutes.post('/', create)
ClasseRoutes.get('/name/:name', getByName)
ClasseRoutes.patch('/:id', update)
ClasseRoutes.delete('/:id', deleteClasse)

module.exports = ClasseRoutes