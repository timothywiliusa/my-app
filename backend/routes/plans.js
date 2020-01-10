const router = require('express').Router();
let Plan = require('../models/plan.model');

router.route('/').get((req,res) => {
    Plan.find()
    .then(plans => res.json(plans))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const factionname = req.body.factionname;
    const description = req.body.description;
    const duein = Number(req.body.duein);
    const date= Date.parse(req.body.date);


    const newPlan = new Plan({
        factionname,
        description,
        duein,
        date,
    });

    newPlan.save()
    .then(() => res.json('Plan added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;