import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebSocket2 } from '../../app/WebSocket';

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
  templateUrl: 'add-event.html'
})
export class addEventPage {
  public event = {
    month: '2017-11-21',
    timeStarts: '07:00',
    timeEnds: '2021-02-20'
  }


	// latitude : any;b
	// longitude : any;
	// radius: any;
	// placeSearch: any;
	// autocomplete: any;
	// circle: any;
	// geolocation : any;
  addEventForm: FormGroup;
  myDate : string = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.navCtrl = navCtrl;
    this.addEventForm = formBuilder.group({
      title: ['', Validators.required],
      date: [''],
      time: [''],
      location: ['', Validators.required],
      description: ['', Validators.required],
      isPrivate: ['', Validators.required]
    });
  };

  sendMessage(value: any): void{
    if(this.addEventForm.valid){
      console.log("valid");
      this.navCtrl.pop();
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


      //dd/MM/yyyy/hh/mm/ss/minuteDif/eventName

      message = "21/11/2017/2/58/00/3/Startup Thing";


      console.log("message: "+message);
      WebSocket2.sendMessage(message);
      //WebSocket.send(message);
      console.log("message sent!");
    }
  }
   ionViewDidLoad() {

   }
   // validate(value:any):void{
   //   if(this.addEventForm.valid){
   //     console.log("valid");
   //     this.navCtrl.pop();
   //   }
   // }
}
