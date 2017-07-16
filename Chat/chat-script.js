// var socket = io.connect("http://localhost:3000")


// // Variables to handle
// var message = document.getElementById('message');
// var button = document.getElementById('send');
// var output = document.getElementById('output');


// button.addEventListener('click', emitMessage);

// //Emit messages
// function emitMessage() {
// 	socket.emit('player-message', {
// 		message: message.value,
// 		id: socket.id
// 	});
// }


// //Listen for events
// socket.on('player-message', function(data){
// 	displayMessage(data);
// });

// function displayMessage(data) {
// 	output.innerHTML += '<p><strong>'+data.id+": </strong>" + data.message+"</p>";
// }

var socket = io.connect("http://localhost:3000")
var chat = new Chat();
var message = chat.getMessage();
var button = chat.getButton();
var output = chat.getOutput();

button.addEventListener('click', function(){
	chat.emitMessage(socket, message);
});

socket.on('player-message', function(data){
	chat.displayMessage(data);
});





