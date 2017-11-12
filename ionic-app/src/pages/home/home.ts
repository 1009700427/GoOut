import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from "../sign-up/sign-up";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	SignUpPage = SignUpPage;
	LoginPage = LoginPage;
  constructor(public navCtrl: NavController) {

  }
}
