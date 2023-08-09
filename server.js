const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const PORT = 4000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
});
let response;

io.on('connection', (socket) => {
  
  
  socket.emit('socketId',socket.id);

  socket.on('lights', (lights) => {
    response = lights
    console.log(response);
   
  });
socket.emit('responseBack',response);
  socket.on('buttonClick', () => {
    console.log('Button clicked on the client');
  });

  
});

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server running on Port ', PORT);
});
