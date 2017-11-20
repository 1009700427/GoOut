import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
} from '@ionic-native/google-maps';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';
import { addEventPage } from '../add-event/add-event';
import { FindPeoplePage } from '../find-people/find-people';
import {YourPage } from '../your/your';
import { FindEventsPage } from '../find-events/find-events';

 declare var google : any;

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage { 
  LoginPage = LoginPage;
  addEventPage = addEventPage;
  YourPage = YourPage;
  @ViewChild('map') mapRef : ElementRef;
  @ViewChild('search') searchRef : any;
  map: any;
  searchTerm : string;
  // map: GoogleMap;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) { }

  searchEvents() {
    this.searchTerm = this.searchRef.value;
    console.log(this.searchTerm);
    let myModal = this.modalCtrl.create(FindEventsPage, {term : this.searchTerm});
    myModal.present();
  }

  searchPeople() {
    this.searchTerm = this.searchRef.value;
    console.log(this.searchTerm);
    let myModal = this.modalCtrl.create(FindPeoplePage, {term : this.searchTerm});
    myModal.present();
  }

  onInput(e){
    console.log(e);
  }
  ionViewDidLoad() {
    console.log(this.mapRef);
    console.log(window.localStorage.getItem('username'));
    console.log(window.localStorage.getItem('fullname'));
    this.showMap();

    // this.loadMap();
    // console.log('ionViewDidLoad MainPage');
  }
swipeEvent(e){
    //go to the login page if 
    //the user swipes to the left
    if(e.direction == 2){
      this.navCtrl.push(LoginPage);
    }
    // //go to the signup page if 
    // //the user swipes to the right
    if(e.direction == 4){
      this.navCtrl.push(SignUpPage);
    }
  }
  //will removed all the stored data from the local storage;
  logout(){
    //remove any further data members
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('fullname');
    this.navCtrl.pop();

  }

showMap(){
  //location-- lat long
  const location = new google.maps.LatLng(34.022356, -118.285096);
  var infoWindow;
  //Map options
  const options = {
    center : location,
    zoom: 16,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    mapTypeControl: true,
       mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_CENTER
          },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
     },
    streetViewControl: true,
          streetViewControlOptions: {
              position: google.maps.ControlPosition. RIGHT_TOP
    }

  }

  const map = new google.maps.Map(this.mapRef.nativeElement, options);
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            //this.handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
         // this.handleLocationError(false, infoWindow, map.getCenter());
        }

}
 
// handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                               'Error: The Geolocation service failed.' :
//                               'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
//  }
}
 //  loadMap() {
 //    let mapOptions: GoogleMapOptions = {
 //      camera: {
 //        target: {
 //          lat: 43.0741904,
 //          lng: -89.3809802
 //        },
 //        zoom: 18,
 //        tilt: 30
 //      }
 //    };
 //    this.map = GoogleMaps.create('map', mapOptions);
 //    // Wait the MAP_READY before using any methods.
 //    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
 //        console.log('Map is ready!');
 //        // Now you can use all methods safely.
 //        this.map.addMarker({
 //            title: 'Ionic',
 //            icon: 'blue',
 //            animation: 'DROP',
 //            position: {
 //              lat: 43.0741904,
 //              lng: -89.3809802
 //            }
 //          })
 //          .then(marker => {
 //            marker.on(GoogleMapsEvent.MARKER_CLICK)
 //              .subscribe(() => {
 //                alert('clicked');
 //              });
 //          });
 //      });
 // }
