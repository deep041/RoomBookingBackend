const express = require('express');
const route = express.Router();
const room = require('../controllers').room;

route.post('/', room.getAllRoom);

module.exports = route;