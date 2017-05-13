var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});

wss.on("connection", function(socket) {
    socket.on("message", function(msg) {
        if(msg === 'IP'){
          socket.send("chang_ip");
        }
        socket.send("Nice to meet you!");
    });
});

wss.broadcast = function (data) {
    wss.clients.forEach(function (client) {
        client.send(data);
    });
};