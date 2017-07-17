var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(3000);
console.log("SERVER RUNNING...");

connections = [];
app.use(express.static(__dirname));
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection', function(socket) {
	connections.push(socket);
	console.log('%s sockets connected.', connections.length);

	socket.on('mouseDown', function(data){
		io.sockets.emit('mouseDown', data)
	});


	socket.on('clear', function(data) {
		io.sockets.emit('clear')
	});


	socket.on('mouseMove', function(data){
		io.sockets.emit('mouseMove', data)
	});


	socket.on('mouseUp', function(){
		io.sockets.emit('mouseUp')
	});

	socket.on('mouseLeave', function(){
		io.sockets.emit('mouseLeave')
	});


	socket.on('disconnect', function (data) {
		connections.splice(connections.indexOf(socket), 1);
		console.log('1 socket disconnected. %s left.', connections.length);
	})
});

//SET PATH=C:\Program Files\Nodejs;%PATH%
