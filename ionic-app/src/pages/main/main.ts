import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 // CameraPosition,
 // MarkerOptions,
 // Marker
} from '@ionic-native/google-maps';



import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google : any;

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  @ViewChild('map') mapRef : ElementRef;
  map: any;
	// map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log(this.mapRef);
    this.showMap();

  	// this.loadMap();
	  // console.log('ionViewDidLoad MainPage');
  }


showMap(){
  //location-- lat long
  const location = new google.maps.LatLng(34.022356, -118.285096);
  var infoWindow;
  //Map options
  const options = {
    center : location,
    zoom: 10,
    fullscreenControl: false,
    mapTypeId: 'roadmap'
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

 //  	this.map = GoogleMaps.create('map', mapOptions);

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

