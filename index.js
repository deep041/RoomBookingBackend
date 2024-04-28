require('dotenv').config();
require('./config/db.config').connect();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Project Started');
});

app.use('/', routes);

const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
});

io.on('connection', () => {
    console.log('Socket connected!');
});

app.set('io', io)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});