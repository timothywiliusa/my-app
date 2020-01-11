const router = require('express').Router();
let Purpose = require('../models/purpose.model');

router.route('/').get((req,res) => {
    Purpose.find()
    .then(purpose => res.json(purpose))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const purpose = req.body.purpose;

    const newPurpose = new Purpose({purpose});

    newPurpose.save()
    .then(() => res.json('Purpose added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;