const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({
    factionname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duein: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

},{
    timestamps: true,
})

const Plan = mongoose.model('Plan',planSchema);

module.exports = Plan;