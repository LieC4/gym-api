const TrainerRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    getByName,
    update,
    deleteTrainer } = require('./trainer.controllers');

TrainerRoutes.get('/', getAll)
TrainerRoutes.get('/:id', getById)
TrainerRoutes.post('/', create)
TrainerRoutes.get('/name/:name', getByName)
TrainerRoutes.patch('/:id', update)
TrainerRoutes.delete('/:id', deleteTrainer)

module.exports = TrainerRoutes