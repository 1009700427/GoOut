import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebSocket } from '../../app/WebSocket';

// import {Geolocation} frnom '@ionic-native/geolocation';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class addEventPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }


	// latitude : any;b
	// longitude : any;
	// radius: any;
	// placeSearch: any;
	// autocomplete: any;
	// circle: any;
	// geolocation : any;
  addEventForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.navCtrl = navCtrl;
    this.addEventForm = formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      isPrivate: ['', Validators.required]
    });
  };

  sendMessage(value: any): void{
    console.log("in send message");
      var title = value.title;
      var date = value.date;
      var time = value.time;
      var location = value.location;
      var description = value.description;
      var isPrivate = "false";

      var dateList = date.split("-");
      var timeList = time.split(":");



      var message = dateList[2]+"/"+dateList[1]+"/2017"+timeList[0]+"/"+timeList[1]+"/00/1/"+title;

      console.log("message: "+message);
      //WebSocket.sendMessage(message);
      WebSocket.send(message);
      console.log("message sent!");
  }
   ionViewDidLoad() {

   }
   validate(value:any):void{
     if(this.addEventForm.valid){
       console.log("valid");
       this.navCtrl.pop();
     }
   }
   //socket: WebSocket = null;
//   myApp: any = angular.module("onLoadApp", [])
//     .controller("onloadController", function($scope) {
//       $scope.$on('$ionicView.loaded', function(event) {
//         this.connectToServer();
//       });
//     });
//   connectToServer(): void{
//     this.socket = new WebSocket("ws://localhost:8080/GoOut-Backend/GoOutServer");
//     this.socket.onopen = function(event) {
//       console.log("Connected!");
//     }
//     this.socket.onmessage = function(event) {
//       document.getElementById("mychat").innerHTML += event.data + "<br />";
//     }
//     this.socket.onclose = function(event) {
//       console.log("Disconnected!");
//     }
//   }





//    ionViewDidLoad() {
//    	this.autocomplete = new google.maps.places.Autocomplete(
//             (<HTMLInputElement>document.getElementById('autocomplete')),
//             {types: ['geocode']}
// 	);

//     this.geo.getCurrentPosition().then( pos => {
//     	this.latitude = pos.coords.latitude;
//     	this.longitude = pos.coords.longitude;
//     	this.radius = pos.coords.accuracy;
//     }).catch( err => console.log( err ));
//   }

//   geolocate(){
//   		this.geolocation = {
//               lat: this.latitude,
//               lng: this.longitude
//          };
//         this.circle = new google.maps.Circle({
//               center: this.geolocation,
//               radius: this.radius
//          });
// 			this.autocomplete.setBounds(this.circle.getBounds());
// 	}



}
