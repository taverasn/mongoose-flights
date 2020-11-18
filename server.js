// require our modules & init settings variables
const express = require('express');
const port = process.env.port || 3000;

const indexRouter = require('./routes/index');
const flightRouter = require('./routes/flights');

const morgan = require('morgan');

// create express app
const app = express();

// config server settings
require('./config/database');

app.set('view engine', 'ejs');

// mount middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// mount routes
app.use('/', indexRouter);
app.use('/flights', flightRouter);

// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});