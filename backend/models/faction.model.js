const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const factionSchema = new Schema({
    factionname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3 
    },
},{
    timestamps: true,
})

const Faction = mongoose.model('Faction',factionSchema);

module.exports = Faction;