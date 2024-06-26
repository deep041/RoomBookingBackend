require('dotenv').config();
require('./config/db.config').connect();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
const PORT = process.env.API_PORT;

app.get('/', (req, res) => {
    res.send('Project Started');
});

app.use('/', routes);

const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200', 'https://room-booking-iota.vercel.app']
    }
});

io.on('connection', () => {
    console.log('Socket connected!');
});

app.set('io', io)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});