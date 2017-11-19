import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { GoogleMaps } from '@ionic-native/google-maps';
import { LoginPage } from "../pages/login/login";
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
//Pages
import { HomePage } from '../pages/home/home';
import { MainPage } from "../pages/main/main";
import { eventPage } from "../pages/event-detail/event-detail";
import { userEventPage } from "../pages/user-event/user-event";

import { SignUpPage } from "../pages/sign-up/sign-up";

import { addEventPage } from "../pages/add-event/add-event";
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
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
    HttpModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
