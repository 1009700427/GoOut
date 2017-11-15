// import {
//  GoogleMaps,
//  GoogleMap,
//  GoogleMapsEvent,
//  GoogleMapOptions,
//  // CameraPosition,
//  // MarkerOptions,
//  // Marker
// } from '@ionic-native/google-maps';



// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the MainPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'main-page',
//   templateUrl: 'main.html',
// })
// export class MainPage {
// 	map: GoogleMap;


//   // constructor(public navCtrl: NavController, public navParams: NavParams) { 
//   // 	console.log('Inside main page');

//   // }
//   constructor(private googleMaps:GoogleMaps){

//   }

//   ionViewDidLoad() {
//   	this.loadMap();
//     console.log('ionViewDidLoad MainPage');
//   }

//   loadMap() {
//     let mapOptions: GoogleMapOptions = {
//       camera: {
//         target: {
//           lat: 43.0741904,
//           lng: -89.3809802
//         },
//         zoom: 18,
//         tilt: 30
//       }
//     };

//   	this.map = GoogleMaps.create('map_canvas', mapOptions);

    
//   function onMapReady(){
//     alert('map ready')
//   };
    

//     // Wait the MAP_READY before using any methods.
//     this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
//         console.log('Map is ready!');

//         // Now you can use all methods safely.
//         this.map.addMarker({
//             title: 'Ionic',
//             icon: 'blue',
//             animation: 'DROP',
//             position: {
//               lat: 43.0741904,
//               lng: -89.3809802
//             }
//           })
//           .then(marker => {
//             marker.on(GoogleMapsEvent.MARKER_CLICK)
//               .subscribe(() => {
//                 alert('clicked');
//               });
//           });

//       });

//    //ADDITIONS

//   }
	

// }



import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavController } from 'ionic-angular';
declare var google;
@Component({
  selector: "main-page",
  templateUrl: "main.html"
})

export class MainPage{
  @ViewChild('map') mapElement : ElementRef;
  map:any;

  constructor(public  navCtrl : NavController){

  }
  ionViewDidLoad(){
    this.loadMap();
  }
  loadMap(){
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
