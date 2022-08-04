const Trainer = require('./trainer.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const trainers = await Trainer.find();
        return res.json({
            status: 200,
            message: 'Recovered all trainer ',
            data: { trainers }
        });
    } catch (error) {
        return next(setError(500, 'Failed all trainers'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const trainer  = await Trainer.findById(id);
        if (!trainer) return next(setError(404, 'Trainer not found'))
        return res.json({
            status: 200,
            message: 'Recovered all trainer ',
            data: { trainer }
        });
    } catch (error) {
        return next(setError(500, 'Failed trainer'))
    }
}

const create = async (req, res, next) => {
    try {
        const trainertoSave = new Trainer(req.body)
        const trainerInDb = await TrainertoSave.save()
        return res.json({
            status: 201,
            message: 'Create new trainer ',
            data: { trainerInDb }
        });
    } catch (error) {
        return next(setError(500, 'Failed created trainer'))
    }
}


const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const trainer = new Trainer(req.body);
        trainer._id = id;
        const updatedTrainer = await Trainer.findByIdAndUpdate(id, trainer)
        if (!updatedTrainer) return next(setError(404, 'Trainer not found'))
        return res.json({
            status: 200,
            message: 'Updated trainer',
            data: { trainer: updatedTrainer }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated trainer'));
    }
}

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const trainer = await Trainer.find({name:name});
        if (!trainer) return next(setError(404, 'Trainer not found'))
        return res.json({
            status: 200,
            message: 'Recovered trainer by Name',
            data: { trainer }
        });
    } catch (error) {
        return next(setError(500, 'Failed trainer by Name'))
    }
}

const deleteTrainer = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedTrainer = await Trainer.findByIdAndDelete(id)
        if (!deletedTrainer) return next(setError(404, 'Trainer not found'))
        return res.json({
            status: 200,
            message: 'deleted trainer',
            data: { element: deletedTrainer }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted trainer'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteTrainer,
    getByName
}