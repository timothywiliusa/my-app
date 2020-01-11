const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purposeSchema = new Schema({
    purpose: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3 
    },
},{
    timestamps: true,
})

const Purpose = mongoose.model('Purpose',purposeSchema);

module.exports = Purpose;