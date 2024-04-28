const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    session: { type: String }
});