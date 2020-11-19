const Flight = require('../models/flight');
const Ticket = require('../models/tickets');
module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Detail', flight, tickets });
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    if (!req.body.departs) delete req.body.departs
    Flight.create(req.body, function(err, flight) {
        res.redirect(`/flights/${flight._id}`);
    });
}