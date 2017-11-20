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
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { addEventPage } from '../add-event/add-event';
import { FindPeoplePage } from '../find-people/find-people';
import { YourPage } from '../your/your';
import { FindEventsPage } from '../find-events/find-events';
var MainPage = /** @class */ (function () {
    // map: GoogleMap;
    function MainPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LoginPage = LoginPage;
        this.addEventPage = addEventPage;
        this.YourPage = YourPage;
    }
    //event page result DONT SEARCH HERE
    MainPage.prototype.searchEvents = function () {
        this.searchTerm = this.searchRef.value;
        console.log(this.searchTerm);
        var myModal = this.modalCtrl.create(FindEventsPage, { term: this.searchTerm });
        myModal.present();
    };
    MainPage.prototype.searchPeople = function () {
        this.searchTerm = this.searchRef.value;
        console.log(this.searchTerm);
        var myModal = this.modalCtrl.create(FindPeoplePage, { term: this.searchTerm });
        myModal.present();
    };
    MainPage.prototype.onInput = function (e) {
        console.log(e);
    };
    MainPage.prototype.ionViewDidLoad = function () {
        console.log(this.mapRef);
        console.log(window.localStorage.getItem('username'));
        console.log(window.localStorage.getItem('fullname'));
        this.showMap();
        // this.loadMap();
        // console.log('ionViewDidLoad MainPage');
    };
    // swipeEvent(e){
    //     //go to the login page if 
    //     //the user swipes to the left
    //     if(e.direction == 2){
    //       this.navCtrl.push(LoginPage);
    //     }
    //     // //go to the signup page if 
    //     // //the user swipes to the right
    //     if(e.direction == 4){
    //       this.navCtrl.push(SignUpPage);
    //     }
    //   }
    //will removed all the stored data from the local storage;
    MainPage.prototype.logout = function () {
        //remove any further data members
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('fullname');
        this.navCtrl.pop();
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
                position: google.maps.ControlPosition.RIGHT_TOP
            }
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
    __decorate([
        ViewChild('search'),
        __metadata("design:type", Object)
    ], MainPage.prototype, "searchRef", void 0);
    MainPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-main',
            templateUrl: 'main.html',
        }),
        __metadata("design:paramtypes", [ModalController, NavController, NavParams])
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