// var express = require('express');
// var socket = require('socket.io');

// // App setup
// var app = express();
// var server = app.listen(4000, function(){
//     console.log('listening for requests on port 4000,');
// });

// // Static files
// app.use(express.static('public'));

// // Socket setup & pass server
// var io = socket(server);

// var connections = [];

// io.on('connection', function(socket){
// 	console.log("Made socket connection ");
// })





var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(3000);
console.log("SERVER RUNNING...");

connections = [];
app.use(express.static(__dirname));
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/chat.html');
	console.log(__dirname)
});

io.sockets.on('connection', function(socket) {
	connections.push(socket);
	console.log('%s sockets connected.', connections.length);

	socket.on('player-message', function(data){
		console.log('message sent');
		io.sockets.emit('player-message', data);
	})
});