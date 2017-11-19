import {Component} from '@angular/core';
import { SignUpPage } from "../sign-up/sign-up";
import { MainPage } from "../main/main";
import { eventPage } from "../event-detail/event-detail";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { userEventPage } from "../user-event/user-event";
import {Platform, ActionSheetController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
@Component({
	selector: 'home-page',
	templateUrl: "login.html"

})

export class LoginPage{
	const URL = "http://goout.us-west-1.elasticbeanstalk.com/Validation";
	SignUpPage = SignUpPage;
	MainPage = MainPage;
	eventPage = eventPage;
	userEventPage = userEventPage;
	loginForm : FormGroup;

	constructor(
		pubilc navCtrl: NavController,
		public navParams: NavParams,
		public formBuilder: FormBuilder
		// public Platform: Platform, 
		// public actionsheetCtrl: ActionSheetController
	){
		this.nav = nav;
		this.loginForm = formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*'"), Validators.minLength(8), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*'"), Validators.minLength(8), Validators.maxLength(30)])]
		});
	}
	
	// function openMenu(){
	// 	let actionsheet = this.actionsheetCtrl.create({
	// 		title: 'albums',
	// 		cssClass: 'action-sheets-basic-page', 
	// 		buttons:[
	// 		{
	// 			text: 'Delete',
	// 			role: 'destructive',
	// 			icon:!this.Platform.is('ios') ? 'heart-outline': null,
	// 			handler: () => {
	// 				console.log('Favorite Clicked');
	// 			}
	// 		}
	// 	}
	// 		actionsheet.present();
	// }
	validateLogin(value: any): void{
		if(this.loginForm.valid){
			window.localStorage.setItem('username', value.username);
			window.localStorage.setItem('password', value.password);

			this.nav.push(MainPage);
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