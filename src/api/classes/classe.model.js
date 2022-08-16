const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    emoji: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: String, required: true },
    machines: [{ type: Schema.Types.ObjectId, ref:"machines"}],
    customers:[{ type: Schema.Types.ObjectId, ref:"customers" }],

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('classes', schema);