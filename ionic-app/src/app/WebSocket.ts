/**
 * Created by siyuanxu on 11/19/17.
 */
// import { Platform } from 'ionic-angular';
//var WebSocketClient = require('websocket').client;
//import {AlertMethods} from './Alert';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

const WebSocketClient = require('ws');


export class WebSocket2 {

  //static alert1 = AlertMethods;
  constructor() {
    //this.alert1 = alert2;
  }

  public static socketClient = null;

  public static connectToServer(toastCtrl: ToastController) {
    // this.socket = new WebSocket("ws://localhost:8080/GoOut-Backend/GoOutServer")
    //let page = this;
    //console.log("alert1: "+alert1);
    var SERVER_URL = 'ws://localhost:8080/GoOut-Backend/GoOutServer';
    //const WebSocket = require('ws');
    this.socketClient = new WebSocket(SERVER_URL);
    console.log("initialized socket client");
    console.log(this.socketClient);

    this.socketClient.onopen = function(event) {
      console.log("Connected!");
      console.log("conected to "+SERVER_URL);
    };

    this.socketClient.onmessage = function(event) {
      console.log("Date received: "+event.data);
      //alert(event.data);
      //doAlert()
      // {
      //   let alert = alertCtrl.create({
      //     title: 'Notification',
      //     subTitle: event.data,
      //     buttons: ['Ok'],
      //     cssClass: 'centerButton'
      //   });
      //
      //   alert.present();
      // }
      let toast = toastCtrl.create({
        message: event.data,
        duration: 6000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();

    };

    this.socketClient.onclose = function(event) {
      console.log("Disconnected!");
    };

    this.socketClient.onerror = function(err){
      console.log("Error: ", err);
    };

  }
  public static sendMessage(message: string){
    console.log("In websocket: "+message);
    this.socketClient.send(message);
  }
}
