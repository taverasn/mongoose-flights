// require modules
const mongoose = require('mongoose');

// shortcut variable
const db = mongoose.connection;

// connect to database server
mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// set up a connecction listener
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}: ${db.port}`);
});