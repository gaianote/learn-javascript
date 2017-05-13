// WebSocket 为客户端JavaScript的原生对象
var ws = new WebSocket("ws://localhost:8080");
ws.onopen = function (event) {
    ws.send("Hello there!");
}
ws.onmessage = function (event) {
    console.log(event.data);
}