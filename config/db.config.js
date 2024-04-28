const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Database connection failed!', err));    
};