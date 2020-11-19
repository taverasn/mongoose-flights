const Ticket = require('../models/tickets');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket,
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render(`tickets/new`, {
            title: 'New Ticket', tickets, flightId: req.params.id
        })
    })
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    })
}
