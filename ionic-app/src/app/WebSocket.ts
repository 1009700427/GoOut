
/**
 * Created by siyuanxu on 11/19/17.
 */
// import { Platform } from 'ionic-angular';
//var WebSocketClient = require('websocket').client;
// const WebSocketClient = require('ws');

// export class WebSocket {
//   constructor() {

// /**
//  * Created by siyuanxu on 11/19/17.
//  */
// // import { Platform } from 'ionic-angular';
// //var WebSocketClient = require('websocket').client;
// import {AlertMethods} from './AlertMethods';
// const WebSocketClient = require('ws');

// export class WebSocket {
//    alert :AlertMethod;
//   constructor(publc alert :AlertMethods) {
//       this.alert = alert;

// export class WebSocket2 {
//   static alert1 = AlertMethods;
//   constructor(public alert2: AlertMethods) {
//     //this.alert1 = alert2;
//   }

//   public static socketClient = null;
//   public static connectToServer() {
//     // this.socket = new WebSocket("ws://localhost:8080/GoOut-Backend/GoOutServer")
//     let page = this;
//     console.log("alert1: "+this.alert1);
//     var SERVER_URL = 'ws://localhost:8080/GoOut-Backend/GoOutServer';
//     //const WebSocket = require('ws');
//     this.socketClient = new WebSocket(SERVER_URL);
//     console.log("initialized socket client");
//     console.log(this.socketClient);
//     this.socketClient.onopen = function(event) {
//       console.log("Connected!");
//       console.log("conected to "+SERVER_URL);
//     };
//     this.socketClient.onmessage = function(event) {
//       console.log("Date received: "+event.data);
//       console.log("Self: "+page.alert1);
//       page.doAlert(event.data);
//       // console.log(this);

//       //WebSocket2.doAlert(event.data);
//       //alert(event.data);
//       // console.log(this.alertCtrl);
//       // let alert = this.alertCtrl.create({
//       //   title: 'Notification!',
//       //   subTitle: event.data,
//       //   buttons: ['Ok']
//       // });
//       // alert.present();

//     };
//     this.socketClient.onclose = function(event) {
//       console.log("Disconnected!");
//     };
//     this.socketClient.onerror = function(err){
//       console.log("Error: ", err);
//     };



//     // this.socketClient.on('connect', function (connection) {
//     //   console.log('WebSocket Client Connected');
//     //   connection.on('error', function (error) {
//     //     console.log("Connection Error: " + error.toString());
//     //   });

//     //
//     //   this.socketClient.on('close', function () {
//     //     console.log('echo-protocol Connection Closed');
//     //   });
//     //   this.socketClient.on('message', function (message) {
//     //     console.log("message: "+message)
//     //     if (message.type === 'utf8') {
//     //       console.log("Received: '" + message.utf8Data + "'");
//     //     }
//     //   })
//     // });
//     // console.log("established everything");
//     // this.socketClient.connect('ws://localhost:8080/GoOut-Backend/GoOutServer', 'echo-protocol');


//     // this.socketClient.on('connect', function(connection) {
//     //   console.log('WebSocket Client Connected');
//     //   connection.on('error', function(error) {
//     //     console.log("Connection Error: " + error.toString());
//     //   });
//     //   connection.on('close', function() {
//     //     console.log('echo-protocol Connection Closed');
//     //   });
//     //   connection.on('message', function(message) {
//     //     if (message.type === 'utf8') {
//     //       console.log("Received: '" + message.utf8Data + "'");
//     //     }
//     //   }});
//     //   this.socketClient.connect('ws://localhost:8080/GoOut-Backend/GoOutServer', 'echo-protocol');


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

//     //
//     //
//     //
//     //
//     // this.socket.onopen = function(event) {
//     //   console.log("Connected!");
//     // }
//     // this.socket.onmessage = function(event) {
//     //   document.getElementById("mychat").innerHTML += event.data + "<br />";
//     // }
//     // this.socket.onclose = function(event) {
//     //   console.log("Disconnected!");
//     // }


//   }
//   public static sendMessage(message: string){
//     console.log("In websocket: "+message);
//     this.socketClient.send(message);
//   }
// }
