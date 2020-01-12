const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({
    purpose: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prepdays: {
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