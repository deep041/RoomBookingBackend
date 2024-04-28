const express = require('express');
const route = express.Router();
const session = require('../controllers').session;

route.post('/', session.addSession);
route.get('/', session.getSession);

module.exports = route;