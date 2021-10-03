"use strict";

const http = require('http');
const WebSocketServer = require('websocket').server;

const webServer = http.createServer();
let connectionList = [];
const port = '8082';
 
const findByID = id => connectionList.find(item => item.clientID === id);

webServer.listen(port, () => console.log('Сервер запущен'));

const wsServer = new WebSocketServer({
  httpServer: webServer,
  autoAcceptConnections: false
});

wsServer.on('request', request => {
  let connection = request.accept("json", request.origin);
  connectionList.push(connection);
  connection.clientID = Date.now();

  let msg = {
    type: "id",
    id: connection.clientID
  };
  connection.sendUTF(JSON.stringify(msg));

  connection.on('message', message => {
    if (message.type === 'utf8') {
      msg = JSON.parse(message.utf8Data);
      let connect = findByID(msg.id);
      const {sendTo} = msg;

      switch(msg.type) {
        case 'ping':
          connection.sendUTF(JSON.stringify({
            type: 'pong',
          }))
          break;
        case "username":
          connect.username = msg.name;
          break;
        case "user-joined":
          connectionList.forEach(item => {
            if(item && item.username !== msg.name){
              item.sendUTF(JSON.stringify(msg));
            }
          })
          break;
        case "user-disconnected":
          connectionList.forEach(item => {
            if(item && item.username !== msg.name){
              item.sendUTF(JSON.stringify(msg));
            }
          })
          break;
        default:
          if(sendTo){
            const targetUser = connectionList.find(item => item.username === sendTo);
            if(targetUser){
              targetUser.sendUTF(JSON.stringify(msg));
            }
          }
          break;
      }
    }
  });

  connection.on('close', () => {

    const disconnectedUserName = connectionList.find(el => !el.connected)?.username;

    connectionList = connectionList.filter(el => el.connected);

    connectionList.forEach(item => {
      if(item){
        item.sendUTF(JSON.stringify({
          type: 'user-disconnected',
          name: disconnectedUserName
        }));
      }
    });
  });
});
