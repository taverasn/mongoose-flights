// require our modules (express, index controller)
const express = require('express');

const indexCtrl = require('../controllers/index');

// create router object
const router = express.Router();
// define routes
router.get('/', indexCtrl.index);

// export router
module.exports = router;