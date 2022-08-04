const MachineRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    getByName,
    update,
    deleteMachine } = require('./machine.controllers');

MachineRoutes.get('/', getAll)
MachineRoutes.get('/:id', getById)
MachineRoutes.post('/', create)
MachineRoutes.get('/name/:name', getByName)
MachineRoutes.patch('/:id', update)
MachineRoutes.delete('/:id', deleteMachine)

module.exports = MachineRoutes