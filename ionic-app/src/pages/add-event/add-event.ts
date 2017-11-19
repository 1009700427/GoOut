import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  signUpForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.navCtrl = navCtrl;
    this.signUpForm = formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      description: [''],
      isPrivate: ['', Validators.required]
    });
  };

   ionViewDidLoad() {

   }
   validate(value:any):void{
     if(this.signUpForm.valid){
       console.log("valid");
       this.navCtrl.pop();
     }
   }


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
