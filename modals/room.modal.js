const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: { type: String },
    capacity: { type: Number }
});