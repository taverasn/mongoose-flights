// require our modules
const mongoose = require('mongoose')

// create shortcut variable
const Schema = mongoose.Schema;

// define destinationSchema
const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        
    },
    arrival: {
        type: Date
    },
}, {
    timestamps: true
});

// define flightSchema
const flightSchema = new Schema({
    flight: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function () {
            const date = new Date();
            const year = date.getFullYear();
            date.setFullYear(year + 1);
            return date;
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destination: [destinationSchema],
}, {
    timestamps: true
});



// export schema as model mongoose.model()
module.exports = mongoose.model('Flight', flightSchema);
