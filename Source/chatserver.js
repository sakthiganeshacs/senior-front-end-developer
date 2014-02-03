//Module level variables
var http = require('http');
var filesystem = require('fs');
var serverPort = '3000';
var list = new Array();

//Create Server instance and listen to 3000 port
var app = http.createServer(function (request, response) {
    filesystem.readFile('chatapp.html', 'utf-8', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}).listen(serverPort);

//Open the Socket and listen to it 
var io = require('socket.io').listen(app);

//Method to handle when the socket is opened 
io.sockets.on('connection', function (socket) {
    socket.on('send_message_to_server', function (data) {
        io.sockets.emit('send_message_to_client', { message: data['message'], clientname: data['clientname'] });
    });
	
	socket.on('refresh_userstatus_to_server', function (data) {
        io.sockets.emit('refresh_userstatus_to_client', { list: list });
    });
	
	socket.on('send_userstatus_to_server', function (data) {
		var temp = new Object();
		var count = 0;
		var alreadyAvailableinList = false;
		temp.clientid = data['clientid'];
		temp.clientName = data['clientName'];
		temp.status=data['status'];
		for(count = 0;count < list.length;count++) {
			if(list[count].clientid == temp.clientid) {
				list[count].status = temp.status;
				alreadyAvailableinList = true;
			}
		}
		
		if(alreadyAvailableinList == false) {
			list.push(temp);
		}
        io.sockets.emit('send_userstatus_to_client', { clientid : data['clientid'], clientName: data['clientName'], status: data['status'] });
    });
});
