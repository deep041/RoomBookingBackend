const mongoose = require('mongoose');

const roomSchema = require('./room.modal');
const tagsSchema = require('./tags.modal');
const sessionSchema = require('./sessions.modal');
const bookingsSchema = require('./bookings.modal');

const room = mongoose.model('rooms', roomSchema);
const tags = mongoose.model('tags', tagsSchema);
const session = mongoose.model('sessions', sessionSchema);
const bookings = mongoose.model('bookings', bookingsSchema);

const exportValues = {};
exportValues.Room = room;
exportValues.Tags = tags;
exportValues.Session = session;
exportValues.Bookings = bookings;

module.exports = exportValues;