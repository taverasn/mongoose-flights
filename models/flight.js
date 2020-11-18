// require our modules
const mongoose = require('mongoose')

// create shortcut variable
const Schema = mongoose.Schema;

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
    }
}, {
    timestamps: true
});

// export schema as model mongoose.model()
module.exports = mongoose.model('Flight', flightSchema);