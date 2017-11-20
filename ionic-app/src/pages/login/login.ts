import {Component} from '@angular/core';
import { SignUpPage } from "../sign-up/sign-up";
import { MainPage } from "../main/main";
import { eventPage } from "../event-detail/event-detail";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { userEventPage } from "../user-event/user-event";
import { addEventPage } from "../add-event/add-event";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { LimitedMainPage } from '../limited-main/limited-main';
import { Platform } from 'ionic-angular';

@Component({
	selector: 'home-page',
	templateUrl: "login.html"

})

export class LoginPage{
	//const URL = "http://goout.us-west-1.elasticbeanstalk.com/Validation";
	SignUpPage = SignUpPage;
	// MainPage = MainPage;
	eventPage = eventPage;
	userEventPage = userEventPage;
	loginForm : FormGroup;
	addEventPage : addEventPage;
	LimitedMainPage= LimitedMainPage;

	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public plt: Platform){
		this.navCtrl = navCtrl;
		this.loginForm = formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
		});
    console.log("Playform using: "+this.plt.platforms());
	};
	validateLogin(value: any): void{
		if(this.loginForm.valid){
			window.localStorage.setItem('username', value.username);
			window.localStorage.setItem('password', value.password);
			console.log("valid");
			this.navCtrl.push(MainPage);
		}
		// req = new XMLHttpRequest();
		// req.open("get", url + "?username="+ this.username + "&password=" + this.password);
		// req.onreadystatechange = function(){
		// 	if(req.readystate === XMLHttpRequest.DONE && req.status === 200){
		// 		console.log("i finished!");
		// 		//console.log(req.responseText);
		// 	}
		// }
	}


}
