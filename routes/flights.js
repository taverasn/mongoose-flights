// require our modules (express, index controller)
const express = require('express');

const flightCtrl = require('../controllers/flight');

// create router object
const router = express.Router();

// define routes
router.get('/', flightCtrl.index);
router.get('/new', flightCtrl.new);
router.get('/:id', flightCtrl.show);
router.post('/', flightCtrl.create);

// export router
module.exports = router;