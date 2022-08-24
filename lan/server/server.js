const fs = require('fs');
const express = require('express');
const socket = require('socket.io');

//Express Server
const app = express();
const port = 3000;

const s = app.listen(port);
app.use(express.static('../client'));

//Socket
const io = socket(s);
io.sockets.on('connection', onConnection);

//Globals

serverData=4269;

//Functions

if (!fs.existsSync('./data')) {
    fs.mkdir('./data', (err) => {
        if (err) {
            console.log(err);
        }
    })
}

function onConnection(socket) {
    console.log('connection: ' + socket.id);

    socket.on('clientData', onData);
    function onData(clientData) {
        console.log(clientData);
        fs.appendFile('./data/data.txt', socket.id, () => {
            console.log('File Created');
        });
    }

    socket.emit('serverData', serverData);
    if (fs.existsSync('./data/data.txt')) {
        fs.readFile('./data/data.txt', (err, data) => {
            if (err) console.log(err);
            socket.emit('serverData', data.toString());
        })
    }
}