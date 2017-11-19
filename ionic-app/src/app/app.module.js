var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SignUpPage } from "../pages/sign-up/sign-up";
import { GoogleMaps } from '@ionic-native/google-maps';
import { LoginPage } from "../pages/login/login";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from "../pages/main/main";
import { eventPage } from "../pages/event-detail/event-detail";
import { userEventPage } from "../pages/user-event/user-event";
import { addEventPage } from "../pages/add-event/add-event";
import { Geolocation } from '@ionic-native/geolocation';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                SignUpPage,
                LoginPage,
                MainPage,
                eventPage,
                userEventPage,
                addEventPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                SignUpPage,
                LoginPage,
                MainPage,
                eventPage,
                userEventPage,
                addEventPage
            ],
            providers: [
                StatusBar,
                GoogleMaps,
                Geolocation,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map