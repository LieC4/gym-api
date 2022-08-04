const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    machines: [{ type: Schema.Types.ObjectId, ref:"machines"}],

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('trainers', schema);