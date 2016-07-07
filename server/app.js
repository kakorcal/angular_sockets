const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const users = [];
const chats = require('./chats').chats;

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/javascripts', express.static(`${__dirname}/../client/javascripts`));
app.use('/stylesheets', express.static(`${__dirname}/../client/stylesheets`));
app.use('/views', express.static(`${__dirname}/../client/views`));
app.use('/libs', express.static(`${__dirname}/../client/libs`));

app.get('*', (req, res)=>{
  res.sendFile('/views/layout.html', {root: './client'});
});

server.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});

io.on('connection', socket=>{
  console.log('HANDSHAKE SUCCESS');
  var chatter = '';

  socket.on('Request Dummy Data', ()=>{
    socket.emit('Receive Dummy Data', {chats});
  });

  socket.on('Request Users', ()=>{
    socket.emit('Receive Users', {users});
  });

  socket.on('Send Message', ({message})=>{
    io.emit('Receive Message', {username, message});
  });

  socket.on('Add User', ({username})=>{
    chatter = username;
    users.push(username);
    socket.emit('Receive User', username);
  });

  // remove user
  socket.on('disconnect', ()=>{
    console.log('CLIENT DISCONNECT');
  });
});