var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';
import { addEventPage } from '../add-event/add-event';
var MainPage = /** @class */ (function () {
    // map: GoogleMap;
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addEventPage = addEventPage;
    }
    MainPage.prototype.onInput = function (e) {
        console.log(e);
    };
    MainPage.prototype.ionViewDidLoad = function () {
        console.log(this.mapRef);
        this.showMap();
        // this.loadMap();
        // console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.swipeEvent = function (e) {
        //go to the login page if 
        //the user swipes to the left
        if (e.direction == 2) {
            this.navCtrl.push(LoginPage);
        }
        // //go to the signup page if 
        // //the user swipes to the right
        if (e.direction == 4) {
            this.navCtrl.push(SignUpPage);
        }
    };
    MainPage.prototype.showMap = function () {
        //location-- lat long
        var location = new google.maps.LatLng(34.022356, -118.285096);
        var infoWindow;
        //Map options
        var options = {
            center: location,
            zoom: 16,
            fullscreenControl: false,
            mapTypeId: 'roadmap'
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                //this.handleLocationError(true, infoWindow, map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            // this.handleLocationError(false, infoWindow, map.getCenter());
        }
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], MainPage.prototype, "mapRef", void 0);
    MainPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-main',
            templateUrl: 'main.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
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
//# sourceMappingURL=main.js.map