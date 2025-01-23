const {WebSocketServer} = require("ws");
const http = require("http");
const url = require("url");
const port = 9000;

const server = http.createServer();
const wsServer = new WebSocketServer({server});
let connections = [];

const broadcast = (message, username) => {
    connections.forEach(con => {
        if(con.username !== username) {
            con.connection.send(`${username}: ${message}`);
        }
        
    });
}

wsServer.on("connection", (connection, request) => {
    const { username } = url.parse(request.url, true).query
    console.log(`${username} connected`);
    connections.push({"username": username, "connection": connection});
    connection.on("message", (message) => {
        console.log("message", message.toString());
        broadcast(message.toString(), username);
    });
    connection.on("close", () => {
        connections = connections.filter(con => con.username === username);
        console.log(username, "disconnected");
    });
});
  
server.listen(port, () => {
console.log(`WebSocket server is running on port ${port}`)
})