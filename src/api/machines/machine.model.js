const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    duration: { type: String, required: true },
    classes: [{ type: Schema.Types.ObjectId, ref:"classes" }],

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('machines', schema);