const Classe = require('./classe.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const classes = await Classe.find();
        return res.json({
            status: 200,
            message: 'Recovered all classes',
            data: { classes }
        });
    } catch (error) {
        return next(setError(500, 'Failed all classes'));
    }
}


const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const classe = await Classe.findById(id);
        if (!classe) return next(setError(404, 'Classe not found'))
        return res.json({
            status: 200,
            message: 'Recovered all classes',
            data: { classe }
        });
    } catch (error) {
        return next(setError(500, 'Failed classe by Id'))
    }
}


const create = async (req, res, next) => {
    try {
        const ClassetoSave = new Classe(req.body)
        const classeInDb = await ClassetoSave.save()
        return res.json({
            status: 201,
            message: 'Created new classe',
            data: { classeInDb }
        });
    } catch (error) {
        return next(setError(500, 'Failed created classe'))
    }
}



const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const classe = new Classe(req.body);
        classe._id = id;
        const updatedClasse = await Classe.findByIdAndUpdate(id, classe)
        if (!updatedClasse) return next(setError(404, 'Classe not found'))
        return res.json({
            status: 200,
            message: 'Updated classe',
            data: { classe: updatedClasse }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated classe'));
    }
}

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const classe = await Classe.find({name:name});
        if (!classe) return next(setError(404, 'Classe not found'))
        return res.json({
            status: 200,
            message: 'Recovered classe by Name',
            data: { classe }
        });
    } catch (error) {
        return next(setError(500, 'Failed classe by Name'))
    }
}

const deleteClasse = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedClasse = await Classe.findByIdAndDelete(id)
        if (!deletedClasse) return next(setError(404, 'Classe not found'))
        return res.json({
            status: 200,
            message: 'deleted classe',
            data: { element: deletedClasse }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted classe'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteClasse,
    getByName
}