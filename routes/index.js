const router = require('express').Router();

const room = require('./rooms.route');
const session = require('./sessions.route');
const bookings = require('./bookings.route');

router.use('/rooms', room);
router.use('/sessions', session);
router.use('/bookings', bookings);

module.exports = router;
