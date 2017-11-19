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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    LoginPage,
    MainPage,
    eventPage,
    userEventPage

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
    userEventPage
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
