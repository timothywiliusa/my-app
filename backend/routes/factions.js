const router = require('express').Router();
let Faction = require('../models/faction.model');

router.route('/').get((req,res) => {
    Faction.find()
    .then(factions => res.json(factions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const factionname = req.body.factionname;

    const newFaction = new Faction({factionname});

    newFaction.save()
    .then(() => res.json('Faction added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;