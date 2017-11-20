/**
 * Created by siyuanxu on 11/19/17.
 */
// import { Platform } from 'ionic-angular';
//var WebSocketClient = require('websocket').client;
const WebSocketClient = require('ws');

export class WebSocket {
  constructor() {

  }

  public static socketClient = null;

  public static connectToServer() {
    // this.socket = new WebSocket("ws://localhost:8080/GoOut-Backend/GoOutServer")
    this.socketClient = new WebSocket('ws://localhost:8080/GoOut-Backend/GoOutServer', []);
    console.log("initialized socket client");
    this.socketClient.onopen = function(event) {
      console.log("Connected!");
    }
    this.socketClient.onmessage = function(event) {
      document.getElementById("mychat").innerHTML += event.data + "<br />";
    }
    this.socketClient.onclose = function(event) {
      console.log("Disconnected!");
    }
    this.socketClient.onerror = function(err){
      console.log("Error: ", err);
    };



    // this.socketClient.on('connect', function (connection) {
    //   console.log('WebSocket Client Connected');
    //   connection.on('error', function (error) {
    //     console.log("Connection Error: " + error.toString());
    //   });

    //
    //   this.socketClient.on('close', function () {
    //     console.log('echo-protocol Connection Closed');
    //   });
    //   this.socketClient.on('message', function (message) {
    //     console.log("message: "+message)
    //     if (message.type === 'utf8') {
    //       console.log("Received: '" + message.utf8Data + "'");
    //     }
    //   })
    // });
    // console.log("established everything");
    // this.socketClient.connect('ws://localhost:8080/GoOut-Backend/GoOutServer', 'echo-protocol');


    // this.socketClient.on('connect', function(connection) {
    //   console.log('WebSocket Client Connected');
    //   connection.on('error', function(error) {
    //     console.log("Connection Error: " + error.toString());
    //   });
    //   connection.on('close', function() {
    //     console.log('echo-protocol Connection Closed');
    //   });
    //   connection.on('message', function(message) {
    //     if (message.type === 'utf8') {
    //       console.log("Received: '" + message.utf8Data + "'");
    //     }
    //   }});
    //   this.socketClient.connect('ws://localhost:8080/GoOut-Backend/GoOutServer', 'echo-protocol');

    //
    //
    //
    //
    // this.socket.onopen = function(event) {
    //   console.log("Connected!");
    // }
    // this.socket.onmessage = function(event) {
    //   document.getElementById("mychat").innerHTML += event.data + "<br />";
    // }
    // this.socket.onclose = function(event) {
    //   console.log("Disconnected!");
    // }
  }
  public static sendMessage(message: string){
    console.log("In websocket: "+message);
    this.socketClient.send(message);
}
}
