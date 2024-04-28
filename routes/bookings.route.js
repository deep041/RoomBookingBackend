const express = require('express');
const route = express.Router();
const bookings = require('../controllers').bookings;

route.post('/', bookings.bookRoom);

module.exports = route;