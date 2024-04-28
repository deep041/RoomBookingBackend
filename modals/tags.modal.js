const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    roomId: { type: mongoose.Schema.ObjectId },
    isProjector: { type: Boolean },
    isLargeScreen: { type: Boolean },
    isSound: { type: Boolean }
});