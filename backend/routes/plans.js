const router = require('express').Router();
let Plan = require('../models/plan.model');

router.route('/').get((req,res) => {
    Plan.find()
    .then(plans => res.json(plans))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const purpose = req.body.purpose;
    const description = req.body.description;
    const prepdays = Number(req.body.prepdays);
    const date= Date.parse(req.body.date);


    const newPlan = new Plan({
        purpose,
        description,
        prepdays,
        date,
    });

    newPlan.save()
    .then(() => res.json('Plan added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Plan.findById(req.params.id)
    .then(plan => res.json(plan))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req,res) => {
    Plan.findByIdAndDelete(req.params.id)
    .then(() => res.json('Plan deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Plan.findById(req.params.id)
    .then(plan => {
        plan.purpose = req.body.purpose;
        plan.description = req.body.description;
        plan.prepdays = Number(req.body.prepdays);
        plan.date = Date.parse(req.body.date);

        plan.save()
        .then(() => res.json('Plan updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;