import { Component } from '@angular/core';
import { LoginPage } from "../login/login";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { MainPage } from "../main/main";
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-sign-up',
 	templateUrl: 'sign-up.html',
 })
 export class SignUpPage {
 	//need to insert the proper servlet name
 	url : "http://goout.us-west-1.elasticbeanstalk.com/";
 	LoginPage = LoginPage;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: Http) {
 		this.navCtrl = navCtrl;
 		this.signUpForm = formBuilder.group({
 			fullname: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.maxLength(30)])],
 			username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(30)])],
 			password: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
 			confirmPassword: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
 		});
 	};

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SignUpPage');
 	}
 	validateSignUp(value: any): void{
 		if(this.signUpForm.valid){
 			window.localStorage.setItem('username', value.username);
 			window.localStorage.setItem('fullname', value.fullname);
 			//params:
 			//fullname
 			//username
 			//password
 			this.http.get(this.url + "Searching?fullname=" + value.username + "&username="+value.username + "&password=" + value.password)
 			
 			this.navCtrl.push(MainPage);
 		}
 	}

 }
