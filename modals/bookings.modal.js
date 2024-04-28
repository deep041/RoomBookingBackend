const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    sessionId: { type: mongoose.Schema.ObjectId },
    roomId: { type: mongoose.Schema.ObjectId },
    date: { type: Date },
    from: { type: String },
    to: { type: String },
});