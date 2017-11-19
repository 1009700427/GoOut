import {Component} from '@angular/core';
import { SignUpPage } from "../sign-up/sign-up";
import { MainPage } from "../main/main";
import { eventPage } from "../event-detail/event-detail";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { userEventPage } from "../user-event/user-event";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";


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

	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder){
		this.navCtrl = navCtrl;
		this.loginForm = formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
		});
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