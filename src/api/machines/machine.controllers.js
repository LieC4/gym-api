const Machine = require('./machine.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const machines  = await Machine.find();
        return res.json({
            status: 200,
            message: 'Recovered all machines',
            data: { machines }
        });
    } catch (error) {
        return next(setError(500, 'Failed all machines'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const machine  = await Machine.findById(id);
        if (!machine) return next(setError(404, 'Machine not found'))
        return res.json({
            status: 200,
            message: 'Recovered all machine ',
            data: { machine }
        });
    } catch (error) {
        return next(setError(500, 'Failed machine'))
    }
}

const create = async (req, res, next) => {
    try {
        const MachinetoSave = new Machine(req.body)
        const machineInDb = await MachinetoSave.save()
        return res.json({
            status: 201,
            message: 'Create new machine ',
            data: { machineInDb }
        });
    } catch (error) {
        return next(setError(500, 'Failed created machine'))
    }
}


const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const machine = new Machine(req.body);
        machine._id = id;
        const updatedMachine = await Machine.findByIdAndUpdate(id, machine)
        if (!updatedMachine) return next(setError(404, 'Machine not found'))
        return res.json({
            status: 200,
            message: 'Updated machine',
            data: { machine: updatedMachine }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated machine'));
    }
}

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const machine = await Machine.find({name:name});
        if (!machine) return next(setError(404, 'Machine not found'))
        return res.json({
            status: 200,
            message: 'Recovered machine by Name',
            data: { machine }
        });
    } catch (error) {
        return next(setError(500, 'Failed machine by Name'))
    }
}

const deleteMachine = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedMachine = await Machine.findByIdAndDelete(id)
        if (!deletedMachine) return next(setError(404, 'Machine not found'))
        return res.json({
            status: 200,
            message: 'deleted machine',
            data: { element: deletedMachine }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted machine'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteMachine,
    getByName
}